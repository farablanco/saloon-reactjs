import Raven from 'raven-js'
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { Provider } from 'react-globally'
import store from './store'

Raven.config(process.env.REACT_APP_SENTRY_DSN).install()

ReactDOM.render(
    <Provider globalState={store}>
        <App />
    </Provider>    
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
