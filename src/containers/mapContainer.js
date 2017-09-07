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
    contextualMenu: state.contextualMenu
  }
);

const mapDispatchToProps = dispatch => (
  {
    showContextualMenu: event => dispatch(onMapRightClickHandler(event)),
    hideContextualMenu: () => dispatch(actions.hideContextualMenu()),
    addMarker: position => dispatch(actions.addMarker(position)),
    showMarkerDescription: id => dispatch(actions.showMarkerDescription(id)),
    removeMarker: id => dispatch(actions.removeMarker(id)),
    hideMarkerDescription: () => dispatch(actions.hideMarkerDescription())
  }
);

const mapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default mapContainer;
