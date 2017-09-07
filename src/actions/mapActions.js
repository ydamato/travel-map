export const hideContextualMenu = () => ({
  type: 'HIDE_CONTEXTUAL_MENU'
});

export const hideMarkerDescription = () => ({
  type: 'HIDE_MARKER_DESCRIPTION'
});

export const removeMarker = id => ({
  type: 'REMOVE_MARKER',
  id
});

export const showMarkerDescription = id =>
  (dispatch) => {
    // Hide the contextual menu
    dispatch(hideContextualMenu());

    // Show marker description
    dispatch({
      type: 'SHOW_MARKER_DESCRIPTION',
      id
    });
  };

export const addMarker = position =>
  (dispatch) => {
    // Hide all markers descriptions
    dispatch(hideMarkerDescription());

    // Hide the contextual menu
    dispatch(hideContextualMenu());

    // Add marker
    dispatch({
      type: 'ADD_MARKER',
      position
    });
  };

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

