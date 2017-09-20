import { connect } from 'react-redux';
import MarkerDetailsComponent from '../components/markerDetails/markerDetailsComponent';
import { removeMarker } from '../actions/mapActions';
import { getActiveMarker } from '../selectors/mapSelectors';

const mapStateToProps = state => (
  {
    marker: getActiveMarker(state)
  }
);

const mapDispatchToProps = dispatch => (
  {
    removeMarker: id => dispatch(removeMarker(id))
  }
);

const markerDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerDetailsComponent);

export default markerDetailsContainer;
