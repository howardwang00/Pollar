import React from 'react';

import './LoginView.css';

import googleButton from './btn_google_light_normal_ios.svg';

class LoginView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return(
      <div>
        LoginView
        <button onClick={this.props.signInWithGoogle}>
          <img src={googleButton}/>
          Sign in with Google
        </button>
      </div>
    )
  }
}

export default LoginView;
