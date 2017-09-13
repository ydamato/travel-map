import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import App from './components/app';
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
    <App />
  </Provider>,
  document.getElementById('root')
);
