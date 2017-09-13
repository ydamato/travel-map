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

export const updateSearchBoxValue = value => ({
  type: 'UPDATE_SEARCHBOX_VALUE',
  value
});

export const hideAllInfoWindows = () => ({
  type: 'HIDE_ALL_INFO_WINDOWS'
});

export const showMarkerDescription = id => ({
  type: 'SHOW_MARKER_DESCRIPTION',
  id
});

export const addMarker = (position, label) => ({
  type: 'ADD_MARKER',
  position,
  label
});

// const _dispatchShowContextualMenu = (dispatch, data, label) => {
//   const contextualMenu = _.merge({}, data, { label });
//   // show contextual menu
//   dispatch({
//     type: 'SHOW_CONTEXTUAL_MENU',
//     contextualMenu
//   });
// };

export const showContextualMenu = (lat, lng) =>
  ({
    type: 'SHOW_CONTEXTUAL_MENU_REQUEST',
    lat,
    lng
  });

export const showSearchedLocation = value =>( {} ); //TODO
  // (dispatch) => {
  //   geocodeByAddress(value)
  //     .then(results => getLatLng(results[0]))
  //     .then((latLng) => {
  //       const data = {
  //         position: latLng
  //       };
  //       _dispatchShowContextualMenu(dispatch, data, value);
  //     })
  //     .catch(error => console.error('Error', error));
  // };
