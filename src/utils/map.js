import fetch from 'isomorphic-fetch';
import _ from 'lodash';

export const fetchGeocode = (lat, lng) =>
  fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.json();
    });

export const getLabelFromGeocode = (data) => {
  let addressComponents = null;
  if (!_.has(data, 'results[0].address_components')) {
    throw new Error();
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
