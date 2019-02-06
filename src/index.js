import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from 'react-router-private';
import Login from './PublicComponents/Login/index';
import Dashboard from './PrivateComponents/Dashboard/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Route path ="/" exact component={Login} />
        </App>
    </Router>
    , document.querySelector('#root'));
serviceWorker.unregister();
