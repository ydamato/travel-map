export const getActiveMarker = state => state.markers.find(marker => marker.isActive);
export const getMarkers = state => state.markers;
