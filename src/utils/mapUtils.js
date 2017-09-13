import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
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
