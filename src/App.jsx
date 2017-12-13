import React, { Component } from 'react';
import './css/scss/App.css';

import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    isLogged: false
  }

  loginUser = (btnClicked) => {
    this.setState((prevState) => ({
        isLogged: btnClicked === 'react'
    }))
  }

  logoutUser = () => {
    localStorage.removeItem("session")
    this.setState((prevState) => ({
        isLogged: false
    }))
  }

  componentWillMount() {
    const session = localStorage.getItem("session") !== null
    if (session) {
      this.setState((prevState) => ({
          isLogged: true
      }))
    }
  }

  render() {
    return (
      <div className="global">
        {
          !this.state.isLogged
          ?   <Login loginUser={this.loginUser} />
          :   <Dashboard logoutUser={this.logoutUser} />
        }
      </div>
    )
  }
}

export default App;