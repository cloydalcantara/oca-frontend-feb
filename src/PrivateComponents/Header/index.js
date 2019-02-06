import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return (
          // <PrivateRoute path="/competency-sub" exact component={CompetencySub} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/competency-type" exact component={CompetencyType} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/competency-indicators" exact component={CompetencyIndicators} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/organizational-structure" exact component={OrganizationalStructure} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/organizational-structureType" exact component={OrganizationalStructureType} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/position" exact component={Position} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/userManagement" exact component={UserManagement} authStatus={true} redirectURL="/" />
          //   <PrivateRoute path="/dashboard" exact component={Dashboard} authStatus={true} redirectURL="/" />
          <div className="sidebar" data-color="purple" data-background-color="white">
            <div className="logo">
              <a href="/" className="simple-text logo-normal">
                O.C.A
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="material-icons">person</i>
                    <p>Dashboard</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/competency-sub">
                    <i className="material-icons">person</i>
                    <p>Competency Sub</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/competency-type">
                    <i className="material-icons">person</i>
                    <p>Competency Type</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/competency-indicators">
                    <i className="material-icons">person</i>
                    <p>Indicators</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/organizational-structure">
                    <i className="material-icons">person</i>
                    <p>Org. Structure</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/organizational-structureType">
                    <i className="material-icons">person</i>
                    <p>Org. Structure Type</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/position">
                    <i className="material-icons">person</i>
                    <p>Position</p>
                  </a>
                </li>
              </ul>
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/userManagement">
                    <i className="material-icons">person</i>
                    <p>Management User</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}