import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import MarkerListComponent from '../components/markerList/markerListComponent';

const mapStateToProps = state => (
  {
    markers: state.markers
  }
);

const mapDispatchToProps = dispatch => (
  {
    showMarkerDescription: id => dispatch(actions.showMarkerDescription(id)),
    removeMarker: id => dispatch(actions.removeMarker(id)),
    hideMarkerDescription: () => dispatch(actions.hideMarkerDescription()),
  }
);

const markerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerListComponent);

export default markerListContainer;
