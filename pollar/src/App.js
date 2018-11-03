import React, { Component } from 'react';

import firebase from './firebase.js';

import LoginView from './LoginView.js';
import DashboardView from './DashboardView.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 1,
    };
  }

  componentWillMount() {
    //Sign in to firebase
  }

  currentPage() {
    if(this.state.currentView === 0) {
      return(
        <LoginView/>
      )
    } else if(this.state.currentView === 1) {
      return(
        <DashboardView/>
      )
    }
  }

  render() {
    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}

export default App;
