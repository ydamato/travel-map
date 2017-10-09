import { put, takeEvery } from 'redux-saga/effects';
import { hideMarkerDescription, hideContextualMenu } from '../actions/mapActions';


function* addMarker() {
  yield put(hideMarkerDescription());
  yield put(hideContextualMenu());
}

export default [
  takeEvery('ADD_MARKER', addMarker)
];
