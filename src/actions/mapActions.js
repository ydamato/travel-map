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

export const showContextualMenuRequest = (lat, lng) =>
  ({
    type: 'SHOW_CONTEXTUAL_MENU_REQUEST',
    lat,
    lng
  });

export const showContextualMenu = (lat, lng, label) =>
  ({
    type: 'SHOW_CONTEXTUAL_MENU',
    label,
    lat,
    lng
  });

export const showSearchedLocationRequest = value =>
  ({
    type: 'SHOW_SEARCHED_LOCATION_REQUEST',
    value
  });


export const updateMarkerPositionRequest = (id, lat, lng) =>
  ({
    type: 'UPDATE_MARKER_POSITION_REQUEST',
    id,
    lat,
    lng
  });

export const updateMarkerTitle = (id, title) =>
  ({
    type: 'UPDATE_MARKER_TITLE',
    id,
    title
  });
