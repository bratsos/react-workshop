import React, { Component } from 'react';
import './css/scss/App.css';

import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logged: false,
      error: false
    }
  }

  componentWillMount() {
    const session = localStorage.getItem('userSession')
    if (session !== null) {
      this.setState({
        logged: true
      })
    }
  }

  userLogin = (type) => {
    if (type === 'react') {
      const session = {
        logged: true
      }
      localStorage.setItem('userSession', JSON.stringify(session))
      this.setState((prevState) => {

        return {
          logged: true
        }
      })
    }
  }

  render() {
    console.count('render')
    return (

      <div className="global">
      {
        this.state.logged
        ? <Dashboard />
        : <Login lalakoko={this.userLogin}/>
      }

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
