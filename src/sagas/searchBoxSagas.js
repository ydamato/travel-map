import { put, call, takeLatest } from 'redux-saga/effects';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { showContextualMenu } from '../actions/mapActions';

const getLatLngRequest = value =>
  geocodeByAddress(value)
    .then(results => getLatLng(results[0]));

function* showSearchLocationRequest({ value }) {
  const { lat, lng } = yield call(getLatLngRequest, value);
  yield put(showContextualMenu(lat, lng, value));
}

export default [
  takeLatest('SHOW_SEARCHED_LOCATION_REQUEST', showSearchLocationRequest)
];
