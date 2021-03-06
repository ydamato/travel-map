import _ from 'lodash';
import defaultContextualMenu from '../data/contextualMenuData';

const contextualMenu = (state = defaultContextualMenu, action) => {
  let updatedState = _.merge({}, state);
  const { label, lat, lng } = action;

  switch (action.type) {
    case 'SHOW_CONTEXTUAL_MENU_REQUEST':
      updatedState = {
        ...updatedState,
        isActive: false
      };
      break;

    case 'SHOW_CONTEXTUAL_MENU':
      updatedState = {
        ...updatedState,
        position: {
          lat,
          lng
        },
        label,
        isActive: !!label
      };
      break;

    case 'HIDE_CONTEXTUAL_MENU':
    case 'HIDE_ALL_INFO_WINDOWS':
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
