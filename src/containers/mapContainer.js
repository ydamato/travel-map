import { connect } from 'react-redux';
import { showContextualMenu } from '../actions/contextualMenuActions';

import MapComponent from '../components/map/mapComponent';

const onMapRightClickHandler = event =>
  showContextualMenu({
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
    showContextualMenu: event => dispatch(onMapRightClickHandler(event))
  }
);

const mapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default mapContainer;
