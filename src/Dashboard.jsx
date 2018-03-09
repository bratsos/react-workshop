import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import TicketThread from './TicketThread';

class Dashboard extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired
  };

  state = {
    notifications: false,
    highlightNotification: false
  };

  newNotification = () => {
    this.setState((prevState) => ({
      notifications: true
    }));
  }

  readNotifications = () => {
    this.setState((prevState) => ({
      notifications: false,
      highlightNotification: true
    }));

    setTimeout(() => {
      this.setState((prevState) => ({
          highlightNotification: false
      }))
    }, 1250);
}

  render() {
    return (
      <div className={`App ${this.state.highlightNotification ? 'highlight-notification' : ''}`}>
        <Header
          logoutUser={this.props.logoutUser}
          hasNotifications={this.state.notifications}
          readNotifications={this.readNotifications}
        />
        <TicketThread
          newNotification={this.newNotification}
        />
      </div>
    );
  }
}

export default Dashboard;
