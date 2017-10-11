import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import SearchBoxComponent from '../components/searchBox/searchBoxComponent';
import { getSearchBox } from '../selectors/searchBoxSelectors';

const mapStateToProps = state => (
  {
    searchBox: getSearchBox(state)
  }
);

const mapDispatchToProps = dispatch => (
  {
    showSearchedLocationRequest: value => dispatch(actions.showSearchedLocationRequest(value)),
    updateSearchBoxValue: value => dispatch(actions.updateSearchBoxValue(value)),
  }
);

const markerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxComponent);

export default markerListContainer;
