import { combineEpics } from 'redux-observable';
import showMarkerDescription from './showMarkerDescriptionEpic';
import addMarker from './addMarkerEpic';
import showContextualMenuRequest from './showContextualMenuRequestEpic';
import showContextualMenu from './showContextualMenuEpic';
import showSearchedLocationRequest from './showSearchedLocationRequestEpic';
import updateMarkerPositionRequest from './updateMarkerPositionRequestEpic';

const rootEpic = combineEpics(
  showMarkerDescription,
  showContextualMenuRequest,
  showContextualMenu,
  showSearchedLocationRequest,
  addMarker,
  updateMarkerPositionRequest
);

export default rootEpic;
