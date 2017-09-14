/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import CounterWidget from './components/counterWidget';
import MapWidget from './components/mapWidget';
import MarkerListWidget from './components/markerListWidget';
import SearchboxWidget from './components/searchboxWidget';
import reducer from './reducers';
import epic from './epics';

let store;
const epicMiddleware = createEpicMiddleware(epic);

if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  );
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

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
