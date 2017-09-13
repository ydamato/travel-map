import { combineEpics } from 'redux-observable';
import showMarkerDescription from './showMarkerDescriptionEpic';
import addMarker from './addMarkerEpic';
import showContextualMenuRequest from './showContextualMenuRequestEpic';
import showContextualMenu from './showContextualMenuEpic';

const rootEpic = combineEpics(
  showMarkerDescription,
  showContextualMenuRequest,
  showContextualMenu,
  addMarker
);

export default rootEpic;
