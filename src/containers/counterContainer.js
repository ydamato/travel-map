import { connect } from 'react-redux';
import CounterComponent from '../components/counter/counterComponent';

const mapStateToProps = state => (
  {
    markers: state.markers
  }
);

const counterContainer = connect(
  mapStateToProps,
  null
)(CounterComponent);

export default counterContainer;
