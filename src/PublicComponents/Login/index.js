import React, { Component } from 'react';
import logo from '../../assets/logo.jpg';
import '../../assets/index.css'

export default class Header extends Component {
    render(){
        return (
            <div className="wrapperlogin fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                    <h3>Online Competency Asessment</h3>
                    </div>
                    <input type="text" autoComplete="off" id="login" className="fadeIn second" name="login" placeholder="Enter Employee ID" />
                    <input type="text" autoComplete="off" id="password" className="fadeIn third" name="login" placeholder="Enter Password" />
                    <input type="submit" className="fadeIn fourth login" value="Log In" />
                    <div id="formFooter">
                    <a className="underlineHover" target="_blank" rel="noopener noreferrer" href="http://tanauancity.gov.ph">Go to the Site</a>
                    </div>
                </div>
            </div>
        )
    }
}