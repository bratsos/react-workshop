import React, { Component } from 'react';
import logo from './assets/images/logo.svg';

import UserMenu from './UserMenu';

class Header extends Component {

  render() {
    // Objectives:
    //
    // We should display the current user's name
    // We should provide a notification notice when a reply is added to the thread
    // We should provide a way to logout

    return (
      <header className="App-header clearfix">
      <div className="header-item left">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="header-item right">
          <div className="notifications left">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <i className="fa fa-circle hidden" aria-hidden="true"></i>
          </div>
          <div className="user-wrapper left">
              <a href="#0">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
          </div>
      </div>
      </header>
    )
  }
};
export default Header;