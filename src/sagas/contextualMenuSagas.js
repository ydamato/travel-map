import { call, put, takeLatest } from 'redux-saga/effects';
import { showContextualMenu, hideMarkerDescription } from '../actions/mapActions';
import { getLabelFromGeocode, getGeocode } from '../utils/mapUtils';

function* showContextualMenuRequest({ lat, lng }) {
  const geocode = yield call(getGeocode, lat, lng);
  yield put(showContextualMenu(lat, lng, getLabelFromGeocode(geocode)));
  yield put(hideMarkerDescription());
}

export default [
  takeLatest('SHOW_CONTEXTUAL_MENU_REQUEST', showContextualMenuRequest)
];
