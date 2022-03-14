import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouters } from './routers/AppRouters';

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
);
