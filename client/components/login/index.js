import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth, getMe} from '../../reducer/user'
import NavigationBar from '../navigationbar'
import './index.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      emailClass: 'noError',
      passwordClass: 'noError'
    }
  }

  // componentDidMount(){
  //   this.props.getMe();
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = () => {
    if (this.state.email.trim().length && this.state.password.trim().length) {
      this.setState({
        emailClass: '',
        passwordClass: ''
      })
      this.props.auth({
        email: this.state.email,
        password: this.state.password
      })
    } else {
      if (!this.state.email.trim()) {
        this.setState({emailClass: 'error'})
      } else {
        this.setState({emailClass: 'noError'})
      }
      if (!this.state.password.trim()) {
        this.setState({passwordClass: 'error'})
      } else {
        this.setState({passwordClass: 'noError'})
      }
    }
  }

  render() {
    // console.log('SESSION CHECK', this.props.currentUser)
    return (
      <div>
        <NavigationBar />
        <div className="login-container">
          <div className="login">
            <div className="input-fields">
              <label>Email</label>
              <input
                type="text"
                className={this.state.emailClass}
                placeholder="Email"
                value={this.state.email}
                name="email"
                autoFocus={true}
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input
                type="password"
                className={this.state.passwordClass}
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <div className="login-button">
                <button type="button" onClick={this.handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const mapLogin = state => {
//   return {
//     name: 'login'
//   }
// }

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDisptachToProps = disptach => {
  return {
    auth: credentials => disptach(auth(credentials))
    // getMe: () => disptach(getMe)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Login)
