import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from '../src/containers/AppContainer';
import configureStore from '../src/stores/store';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import '../styles/index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
