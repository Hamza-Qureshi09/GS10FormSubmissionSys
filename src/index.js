import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {store} from './authStore/index';
import {Provider} from 'react-redux'
// import { store } from './Store/index'
// import { Provider } from 'react-redux'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
