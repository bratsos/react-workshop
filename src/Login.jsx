import React, {Component} from 'react';
import PropTypes from 'prop-types';

import agorf from './assets/images/agorf.png';
import BooLogo from './assets/images/react.svg';
import VueLogo from './assets/images/vue-9.svg';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  };

  state = {
    logging: false,
    showError: false
  };

  shouldLogin = (selected) => {
    if (selected === 'vue') {
      this.setState((prevState) => ({
        logging: true
      }));

      const session = { logged: true };
      localStorage.setItem("session", JSON.stringify(session));

      setTimeout(() => {
        this.props.loginUser(selected)
      }, 300);
    } else {
      this.setState((prevState) => ({
        showError: true
      }));

      setTimeout(() => {
        this.setState((prevState) => ({
          showError: false
        }))
      }, 1250);
    }
  }

  render() {
    return (
      <section className={`login-wrapper ${this.state.logging ? 'logging' : ''}`}>
        {
          this.state.showError &&
            <div className="error-msg">
              We all know that's a lie
            </div>
        }
        <div className="login-box">
          <img alt="agorf" src={agorf} />
          <h1>Which one is my true love?</h1>
          <div className="btns-wrapper">
            <button className="login-btn" onClick={() => this.shouldLogin('react')}>
              <img alt="react logo" src={BooLogo} />
              React
            </button>
            <button className="login-btn" onClick={() => this.shouldLogin('vue')}>
              <img alt="boo logo" src={VueLogo} />
              Vue
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
