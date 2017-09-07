
import { hideMarkerDescription } from './markersActions';


export const showContextualMenu = menuState =>
  (dispatch) => {
    // Hide all markers descriptions
    dispatch(hideMarkerDescription());

    // show contextual menu
    dispatch({
      type: 'SHOW_CONTEXTUAL_MENU',
      menuState
    });
  };

export const hideContextualMenu = () => ({
  type: 'HIDE_CONTEXTUAL_MENU'
});
