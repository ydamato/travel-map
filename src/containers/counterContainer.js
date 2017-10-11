import { connect } from 'react-redux';
import CounterComponent from '../components/counter/counterComponent';
import { getMarkers } from '../selectors/mapSelectors';

const mapStateToProps = state => (
  {
    markers: getMarkers(state)
  }
);

const counterContainer = connect(
  mapStateToProps,
  null
)(CounterComponent);

export default counterContainer;
