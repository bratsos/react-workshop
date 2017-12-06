import React, { Component } from 'react';
import './css/scss/App.css';
import Header from './Header';
import MainLayout from './MainLayout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 'sophiekrt90'
    };
  }

  render() {
    return (
      <div className="App">
       <Header currentUser={this.state.currentUser} />
       <MainLayout />
      </div>
    );
  }
}

export default App;
