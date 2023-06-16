import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
