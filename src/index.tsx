
import { Provider } from 'react-redux';
import store from './store/store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
