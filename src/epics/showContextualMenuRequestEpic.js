import 'rxjs';
import _ from 'lodash';
import { ajax } from 'rxjs/observable/dom/ajax';

export const getLabelFromGeocode = (data) => {
  let addressComponents = null;
  if (!_.has(data, 'results[0].address_components')) {
    return null;
  }
  addressComponents = data.results[0].address_components;
  let city = null;
  let country = null;
  const administrativeArea = {};
  addressComponents.forEach((component) => {
    const componentType = component.types[0];
    if (componentType === 'locality') {
      city = component.long_name;
    }
    if (componentType === 'country') {
      country = component.long_name;
    }
    if (componentType.includes('administrative_area_level_')) {
      administrativeArea[componentType.substr(componentType.length - 1)] = component.long_name;
    }
  });

  if (!city) {
    for (let i = 0; i <= 3; i += 1) {
      if (administrativeArea[i]) {
        city = administrativeArea[i];
      }
    }
  }
  return `${city}, ${country}`;
};

export default action$ =>
  action$
    .ofType('SHOW_CONTEXTUAL_MENU_REQUEST')
    .mergeMap(action =>
      ajax({ url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${action.lat},${action.lng}`, crossDomain: true })
        .map(data => ({
          type: 'SHOW_CONTEXTUAL_MENU',
          label: getLabelFromGeocode(data.response)
        }))
    );
