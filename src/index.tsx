import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { HashRouter } from 'react-router-dom'
import { store } from './state'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core';

import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <MantineProvider withGlobalStyles>
          <App />
        </MantineProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
