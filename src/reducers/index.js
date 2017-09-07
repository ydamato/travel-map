import { combineReducers } from 'redux';
import markers from './markersReducer';
import contextualMenu from './contextualMenuReducer';

const travelMapApp = combineReducers({
  markers,
  contextualMenu
});

export default travelMapApp;

