import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../../reducer/user'
import './index.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="login">
        <div className="input-fields">
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className="login-button">
          <button
            type="button"
            onClick={() =>
              this.props.auth({
                email: this.state.email,
                password: this.state.password
              })
            }
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

const mapLogin = state => {
  return {
    name: 'login'
  }
}

const mapDisptachToProps = disptach => {
  return {
    auth: credentials => disptach(auth(credentials))
  }
}

export default connect(mapLogin, mapDisptachToProps)(Login)
