import { hideContextualMenu } from './contextualMenuActions';

export const showMarkerDescription = key =>
  (dispatch) => {
    // Hide the contextual menu
    dispatch(hideContextualMenu());

    // Show marker description
    dispatch({
      type: 'SHOW_MARKER_DESCRIPTION',
      key
    });
  };

export const hideMarkerDescription = () => ({
  type: 'HIDE_MARKER_DESCRIPTION'
});

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
