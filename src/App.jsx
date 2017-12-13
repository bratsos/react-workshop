import React, { Component } from 'react';
import './css/scss/App.css';

import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {

  render() {
    return (
      <div className="global">
        <Login />
        {
          //                App
          //     Login               Dashboard
          //                   Header         TicketThread
          //                   UserMenu       TicketItem
        }
      </div>
    )
  }
}

export default App;
