import React, {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="input-fields">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>
        <div className="login-button">
          <button type="button">Login</button>
        </div>
      </div>
    )
  }
}

export default Login
