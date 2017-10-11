import { connect } from 'react-redux';
import { showMarkerDescription } from '../actions/mapActions';
import MarkerListComponent from '../components/markerList/markerListComponent';
import { getMarkers } from '../selectors/mapSelectors';

const mapStateToProps = state => (
  {
    markers: getMarkers(state)
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
