import { connect } from 'react-redux';
import { showMarkerDescription } from '../actions/mapActions';
import MarkerListComponent from '../components/markerList/markerListComponent';

const mapStateToProps = state => (
  {
    markers: state.markers
  }
);

const mapDispatchToProps = dispatch => (
  {
    showMarkerDescription: id => dispatch(showMarkerDescription(id))
  }
);

const markerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerListComponent);

export default markerListContainer;
