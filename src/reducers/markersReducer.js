import _ from 'lodash';

const defaultMarkerMap = [
  {
    key: 'nce',
    title: 'Nice',
    description: 'Description for Nice',
    position: {
      lat: 43.675819,
      lng: 7.289429
    }
  },
  {
    key: 'ldn',
    title: 'London',
    description: 'Description for London',
    position: {
      lat: 51.509865,
      lng: -0.118092
    }
  }
];

const createMarker = position => (
  {
    key: Date.now().toString(),
    title: 'new',
    description: 'description',
    position
  }
);

const markers = (state = defaultMarkerMap, action) => {
  const updatedState = _.merge([], state);

  switch (action.type) {
    case 'SHOW_MARKER_DESCRIPTION':
      updatedState.forEach((marker) => {
        marker.isActive = marker.key === action.key;
      });
      break;

    case 'HIDE_MARKER_DESCRIPTION':
      updatedState.forEach((marker) => {
        marker.isActive = false;
      });
      break;

    case 'ADD_MARKER':
      updatedState.push(createMarker(action.position));
      break;

    default:
      break;
  }

  return updatedState;
};

export default markers;
