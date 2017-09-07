import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducers';

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
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
