import _ from 'lodash';

const defaultsearchBox = {
  value: ''
};

const searchBox = (state = defaultsearchBox, action) => {
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
