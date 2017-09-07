import { connect } from 'react-redux';
import { showMarkerDescription, hideMarkerDescription } from '../actions/markersActions';

import MarkerComponent from '../components/markers/markerComponent';

const mapDispatchToProps = dispatch => (
  {
    showMarkerDescription: markerKey => dispatch(showMarkerDescription(markerKey)),
    hideMarkerDescription: () => dispatch(hideMarkerDescription())
  }
);

const markerContainer = connect(
  null,
  mapDispatchToProps
)(MarkerComponent);

export default markerContainer;
