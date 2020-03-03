import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {Provider} from 'react-redux';
import {store} from './modules/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
