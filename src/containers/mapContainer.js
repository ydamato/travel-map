import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import MapComponent from '../components/map/mapComponent';
import { getMarkers } from '../selectors/mapSelectors';
import { getContextualMenu } from '../selectors/contextualMenuSelectors';


const onMapRightClickHandler = event =>
  actions.showContextualMenuRequest(event.latLng.lat(), event.latLng.lng());

const mapStateToProps = state => (
  {
    markers: getMarkers(state),
    contextualMenu: getContextualMenu(state)
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
    updateMarkerPositionRequest: (id, lat, lng) => dispatch(actions.updateMarkerPositionRequest(id, lat, lng))
  }
);

const mapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default mapContainer;
