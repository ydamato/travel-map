import { combineEpics } from 'redux-observable';
import showMarkerDescription from './showMarkerDescriptionEpic';
import addMarker from './addMarkerEpic';
import showContextualMenuRequest from './showContextualMenuRequestEpic';
import showContextualMenu from './showContextualMenuEpic';
import showSearchedLocationRequest from './showSearchedLocationRequestEpic';

const rootEpic = combineEpics(
  showMarkerDescription,
  showContextualMenuRequest,
  showContextualMenu,
  showSearchedLocationRequest,
  addMarker
);

export default rootEpic;
