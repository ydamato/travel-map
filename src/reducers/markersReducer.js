import _ from 'lodash';
import defaultMarkerMap from '../data/markersData';


const createMarker = (position, label) => (
  {
    id: Date.now().toString(),
    title: label,
    description: `Description for ${label}...`,
    position,
    pictures: []
  }
);

const markers = (state = defaultMarkerMap, action) => {
  let updatedState = _.merge([], state);

  switch (action.type) {
    case 'SHOW_MARKER_DESCRIPTION':
      updatedState.forEach((marker) => {
        marker.isActive = marker.id === action.id;
      });
      break;

    case 'HIDE_MARKER_DESCRIPTION':
    case 'HIDE_ALL_INFO_WINDOWS':
      updatedState.forEach((marker) => {
        marker.isActive = false;
      });
      break;

    case 'ADD_MARKER':
      updatedState.push(createMarker(action.position, action.label));
      break;

    case 'REMOVE_MARKER':
      updatedState = updatedState.filter(marker => marker.id !== action.id);
      break;

    case 'UPDATE_MARKER_POSITION_REQUEST':
      updatedState.forEach((marker, index) => {
        if (marker.id === action.id) {
          updatedState[index] = {
            ...marker,
            position: {
              lat: action.lat,
              lng: action.lng
            },
            previousState: updatedState[index]
          };
        }
      });
      break;

    case 'UPDATE_MARKER_POSITION':
      updatedState.forEach((marker, index) => {
        if (marker.id === action.id) {
          updatedState[index] = {
            ...marker,
            title: action.title,
            position: {
              lat: action.lat,
              lng: action.lng
            },
            previousState: null
          };
        }
      });
      break;

    default:
      break;
  }

  return updatedState;
};

export default markers;
