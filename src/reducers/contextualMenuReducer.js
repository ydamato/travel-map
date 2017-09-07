import _ from 'lodash';

const defaultContextualMenu = {
  isActive: false,
  position: {
    lat: 0,
    lng: 0
  }
};

const contextualMenu = (state = defaultContextualMenu, action) => {
  let updatedState = _.merge({}, state);

  switch (action.type) {
    case 'SHOW_CONTEXTUAL_MENU':
      updatedState = {
        ...updatedState,
        ...action.menuState,
        isActive: true
      };
      break;

    case 'HIDE_CONTEXTUAL_MENU':
      updatedState = {
        ...updatedState,
        isActive: false
      };
      break;

    default:
      break;
  }

  return updatedState;
};

export default contextualMenu;
