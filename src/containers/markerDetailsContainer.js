import { connect } from 'react-redux';
import MarkerDetailsComponent from '../components/markerDetails/markerDetailsComponent';
import { removeMarker } from '../actions/mapActions';
import { showModalSlideShow, hideModalSlideShow } from '../actions/markerDetailsActions';
import { getActiveMarker } from '../selectors/mapSelectors';
import { getModalSlideShow } from '../selectors/modalSlideShowSelectors';

const mapStateToProps = state => (
  {
    marker: getActiveMarker(state),
    modalSlideShow: getModalSlideShow(state)
  }
);

const mapDispatchToProps = dispatch => (
  {
    removeMarker: id => dispatch(removeMarker(id)),
    showModalSlideShow: position => dispatch(showModalSlideShow(position)),
    hideModalSlideShow: position => dispatch(hideModalSlideShow(position)),
  }
);

const markerDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerDetailsComponent);

export default markerDetailsContainer;
