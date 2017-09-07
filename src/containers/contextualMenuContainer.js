import { connect } from 'react-redux';
import { addMarker } from '../actions/markersActions';
import { hideContextualMenu } from '../actions/contextualMenuActions';

import ContextualMenuComponent from '../components/contextualMenu/contextualMenuComponent';

const mapDispatchToProps = dispatch => (
  {
    hideContextualMenu: () => dispatch(hideContextualMenu()),
    addMarker: position => dispatch(addMarker(position))
  }
);

const contextualMenuContainer = connect(
  null,
  mapDispatchToProps
)(ContextualMenuComponent);

export default contextualMenuContainer;
