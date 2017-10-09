import { all } from 'redux-saga/effects';
import contextualMenuSagas from './contextualMenuSagas';
import mapSagas from './mapSagas';
import markersSagas from './markersSagas';
import searchBoxSagas from './searchBoxSagas';


function* watchAll() {
  yield all([
    ...contextualMenuSagas,
    ...mapSagas,
    ...markersSagas,
    ...searchBoxSagas
  ]);
}

export default watchAll;
