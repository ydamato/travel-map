import { combineReducers } from 'redux';
import markers from './markersReducer';
import contextualMenu from './contextualMenuReducer';
import searchBox from './searchBoxReducer';
import modalSlideShow from './modalSlideShowReducer';


const travelMapApp = combineReducers({
  markers,
  contextualMenu,
  searchBox,
  modalSlideShow
});

export default travelMapApp;

