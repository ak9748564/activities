import React from 'react';

import './index.css';
import App from './App';
import axios from 'axios';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}><App/></Provider> );