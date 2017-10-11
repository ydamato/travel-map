import { put, call, takeEvery, select } from 'redux-saga/effects';
import { hideContextualMenu, updateMarkerPosition } from '../actions/mapActions';
import { getLabelFromGeocode, getGeocode } from '../utils/mapUtils';

const getPreviousMarkerState = (id, state) =>
  state.markers.find(marker => marker.id === id).previousState;

function* showMarkerDescription() {
  yield put(hideContextualMenu());
}

function* updateMarkerPositionRequest({ id, lat, lng }) {
  const geocode = yield call(getGeocode, lat, lng);
  const label = getLabelFromGeocode(geocode);
  let previousState = null;

  if (label) {
    yield put(updateMarkerPosition(id, label, lat, lng));
  } else {
    previousState = yield select(getPreviousMarkerState.bind(null, id));
    yield put(
      updateMarkerPosition(
        id,
        previousState.title,
        previousState.position.lat,
        previousState.position.lng
      )
    );
  }
}

export default [
  takeEvery('SHOW_MARKER_DESCRIPTION', showMarkerDescription),
  takeEvery('UPDATE_MARKER_POSITION_REQUEST', updateMarkerPositionRequest),
];
