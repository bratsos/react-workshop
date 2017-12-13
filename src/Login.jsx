import React, {Component} from 'react';
import PropTypes from 'prop-types';

import agorf from './assets/images/agorf.png';
import ReactLogo from './assets/images/react.svg';
import BooLogo from './assets/images/vue-9.svg';

class Login extends Component {

  render() {
    // Objectives:
    //
    // We should be able to login when the user clicks the correct option
    // which is React obviously

    // Optional: We can handle wrong option (VueJS ofc) by showing an error message

    return (
      <section className="login-wrapper">
        <div className="login-box">
          <img src={agorf} />
          <h1>Which one is my true love?</h1>
          <div className="btns-wrapper">
            <button className="login-btn">
              <img src={ReactLogo} />
              React
            </button>
            <button className="login-btn">
              <img src={BooLogo} />
              Vue
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;
