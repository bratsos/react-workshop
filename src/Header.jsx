import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './assets/images/logo.svg';
import UserMenu from './UserMenu';

class Header extends Component {
  static defaultProps = {
      currentUser: 'agorf'
  };

  static propTypes = {
    currentUser: PropTypes.string
  };

  state = {
      userMenuOpen: false
  };

  toggleUserMenu = () => {
    this.setState(prevState => ({
        userMenuOpen: !prevState.userMenuOpen
    }))
  }

  flushNotifications = () => {
      this.props.readNotifications();
  }

  render() {
      return (
        <header className="App-header clearfix">
          <div className="header-item left">
              <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-item right">
            <div className="notifications left">
                <i className="fa fa-bell"
                  aria-hidden="true"
                  onClick={this.flushNotifications}
                />
                <i className={`fa fa-circle ${this.props.hasNotifications ? '' : 'hidden'}`}
                    aria-hidden="true"
                />
            </div>
            <div className="user-wrapper left">
              <a href="#0" onClick={this.toggleUserMenu}>
                  {this.props.currentUser}
                  <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              {
              this.state.userMenuOpen &&
                  <UserMenu
                    logoutUser={this.props.logoutUser}
                  />
              }
            </div>
          </div>
        </header>
      )
    }
};

export default Header;
