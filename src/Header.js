import React from 'react';
import logo from './assets/images/logo.svg';

const Header = (props) => {
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
          <a href="/current-user">{props.currentUser}</a>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  )
};

export default Header;