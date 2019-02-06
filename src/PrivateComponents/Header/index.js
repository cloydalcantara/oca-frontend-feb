import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return (
            <div className="sidebar" data-color="purple" data-background-color="white">
        <div className="logo">
          <a href="/" className="simple-text logo-normal">
            O.C.A
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active ">
              <a className="nav-link" href="./user.html">
                <i className="material-icons">person</i>
                <p>User Profile</p>
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item ">
              <a className="nav-link" href="./user.html">
                <i className="material-icons">person</i>
                <p>Organizational Structure</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
        )
    }
}