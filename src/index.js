/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import CounterWidget from './components/counterWidget';
import MapWidget from './components/mapWidget';
import MarkerListWidget from './components/markerListWidget';
import SearchboxWidget from './components/searchboxWidget';
import MarkerDetailsWidget from './components/markerDetailsWidget';
import reducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <CounterWidget />
  </Provider>,
  document.getElementById('react-counter')
);

render(
  <Provider store={store}>
    <MapWidget />
  </Provider>,
  document.getElementById('react-map')
);

render(
  <Provider store={store}>
    <MarkerListWidget />
  </Provider>,
  document.getElementById('react-marker-list')
);

render(
  <Provider store={store}>
    <SearchboxWidget />
  </Provider>,
  document.getElementById('react-searchbox')
);

render(
  <Provider store={store}>
    <MarkerDetailsWidget />
  </Provider>,
  document.getElementById('react-marker-details')
);
