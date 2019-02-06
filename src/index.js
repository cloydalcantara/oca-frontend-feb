import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from 'react-router-private';
import Login from './PublicComponents/Login/index';
import Dashboard from './PrivateComponents/Dashboard/index';
import CompetencySub from './PrivateComponents/Competency-sub/index';
import CompetencyType from './PrivateComponents/Competency-type/index';
import CompetencyIndicators from './PrivateComponents/Competency-indicators/index';
import OrganizationalStructure from './PrivateComponents/Organizational-structure/index';
import OrganizationalStructureType from './PrivateComponents/Organizational-structure-type/index';
import Position from './PrivateComponents/Position/index';
import UserManagement from './PrivateComponents/User-management/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Route path ="/" exact component={Login} />
            <PrivateRoute path="/competency-sub" exact component={CompetencySub} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/competency-type" exact component={CompetencyType} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/competency-indicators" exact component={CompetencyIndicators} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/organizational-structure" exact component={OrganizationalStructure} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/organizational-structureType" exact component={OrganizationalStructureType} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/position" exact component={Position} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/userManagement" exact component={UserManagement} authStatus={true} redirectURL="/" />
            <PrivateRoute path="/dashboard" exact component={Dashboard} authStatus={true} redirectURL="/" />
        </App>
    </Router>
    , document.querySelector('#root'));
serviceWorker.unregister();
