import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import MapComponent from '../components/map/mapComponent';

const onMapRightClickHandler = event =>
  actions.showContextualMenu({
    position: {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
  });

const mapStateToProps = state => (
  {
    markers: state.markers,
    contextualMenu: state.contextualMenu,
    searchBox: state.searchBox
  }
);

const mapDispatchToProps = dispatch => (
  {
    showContextualMenu: event => dispatch(onMapRightClickHandler(event)),
    hideContextualMenu: () => dispatch(actions.hideContextualMenu()),
    addMarker: (position, label) => dispatch(actions.addMarker(position, label)),
    showMarkerDescription: id => dispatch(actions.showMarkerDescription(id)),
    removeMarker: id => dispatch(actions.removeMarker(id)),
    hideMarkerDescription: () => dispatch(actions.hideMarkerDescription()),
    hideAllInfoWindows: () => dispatch(actions.hideAllInfoWindows()),
    showSearchedLocation: value => dispatch(actions.showSearchedLocation(value)),
    updateSearchBoxValue: value => dispatch(actions.updateSearchBoxValue(value))
  }
);

const mapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default mapContainer;
