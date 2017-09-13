import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import MapComponent from '../components/map/mapComponent';

const onMapRightClickHandler = event =>
  actions.showContextualMenuRequest(event.latLng.lat(), event.latLng.lng());

const mapStateToProps = state => (
  {
    markers: state.markers,
    contextualMenu: state.contextualMenu,
    searchBox: state.searchBox
  }
);

const mapDispatchToProps = dispatch => (
  {
    showContextualMenuRequest: event => dispatch(onMapRightClickHandler(event)),
    hideContextualMenu: () => dispatch(actions.hideContextualMenu()),
    addMarker: (position, label) => dispatch(actions.addMarker(position, label)),
    showMarkerDescription: id => dispatch(actions.showMarkerDescription(id)),
    removeMarker: id => dispatch(actions.removeMarker(id)),
    hideMarkerDescription: () => dispatch(actions.hideMarkerDescription()),
    hideAllInfoWindows: () => dispatch(actions.hideAllInfoWindows()),
    showSearchedLocationRequest: value => dispatch(actions.showSearchedLocationRequest(value)),
    updateSearchBoxValue: value => dispatch(actions.updateSearchBoxValue(value)),
    updateMarkerPositionRequest: (id, lat, lng) => dispatch(actions.updateMarkerPositionRequest(id, lat, lng))
  }
);

const mapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default mapContainer;
