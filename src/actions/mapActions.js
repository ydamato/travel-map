import _ from 'lodash';
import { fetchGeocode, getLabelFromGeocode } from '../utils/map';

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

export const hideAllInfoWindows = () => ({
  type: 'HIDE_ALL_INFO_WINDOWS'
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

export const addMarker = (position, label) =>
  (dispatch) => {
    // Hide all markers descriptions
    dispatch(hideMarkerDescription());

    // Hide the contextual menu
    dispatch(hideContextualMenu());

    // Add marker
    dispatch({
      type: 'ADD_MARKER',
      position,
      label
    });
  };

const _dispatchShowContextualMenu = (dispatch, data, label) => {
  const contextualMenu = _.merge({}, data, { label });
  // show contextual menu
  dispatch({
    type: 'SHOW_CONTEXTUAL_MENU',
    contextualMenu
  });
};

export const showContextualMenu = data =>
  (dispatch) => {
    // Hide all markers descriptions
    dispatch(hideMarkerDescription());

    fetchGeocode(data.position.lat, data.position.lng)
      .then((result) => {
        _dispatchShowContextualMenu(dispatch, data, getLabelFromGeocode(result));
      })
      .catch(() => {
        _dispatchShowContextualMenu(dispatch, data, 'undefined');
      });
  };
