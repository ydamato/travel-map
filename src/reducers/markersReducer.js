import _ from 'lodash';

const defaultMarkerMap = [
  {
    id: '1',
    title: 'Nice',
    description: 'Description for Nice',
    position: {
      lat: 43.675819,
      lng: 7.289429
    }
  },
  {
    id: '2',
    title: 'London',
    description: 'Description for London',
    position: {
      lat: 51.509865,
      lng: -0.118092
    }
  }
];

const createMarker = (position, label) => (
  {
    id: Date.now().toString(),
    title: label,
    description: `Description for ${label}...`,
    position
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
