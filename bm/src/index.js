<<<<<<< HEAD
import React,{Component} from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 2e8910ccf398a68db4234836b41674a260f212e0
import ReactDOM from 'react-dom';
// import App from './App';
import axios from './utils/axios'
import RootRouter from './router'
import 'antd/dist/antd.css'
import store from './store/store'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
<<<<<<< HEAD
Component.prototype.$axios=axios
ReactDOM.render(<RootRouter/>, document.getElementById('root'));
=======
import axios from './utils/axios'
import componentImport from './utils/componentImport';

Component.prototype.$axios = axios

ReactDOM.render(
  <Provider store={store}>
    <RootRouter/>
  </Provider>
  , document.getElementById('root'));
>>>>>>> 2e8910ccf398a68db4234836b41674a260f212e0

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
