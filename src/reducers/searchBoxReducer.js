import _ from 'lodash';
import defaultSearchBox from '../data/searchBoxData';

const searchBox = (state = defaultSearchBox, action) => {
  const updatedState = _.merge({}, state);

  switch (action.type) {
    case 'UPDATE_SEARCHBOX_VALUE':
      updatedState.value = action.value;
      break;

    default:
      break;
  }

  return updatedState;
};

export default searchBox;
