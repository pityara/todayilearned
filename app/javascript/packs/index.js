import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '../src/App';
import store from '../src/stores/store';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import '../src/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
