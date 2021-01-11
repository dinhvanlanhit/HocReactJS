import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux'
import {createStore } from 'redux'
import App from './App/App';
import rootReducer from './redux/reducers/root.reducer'
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
