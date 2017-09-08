import { combineReducers } from 'redux';
import markers from './markersReducer';
import contextualMenu from './contextualMenuReducer';
import searchBox from './searchBoxReducer';

const travelMapApp = combineReducers({
  markers,
  contextualMenu,
  searchBox
});

export default travelMapApp;

