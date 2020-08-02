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
      password: ''
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
                placeholder="Email"
                value={this.state.email}
                name="email"
                autoFocus={true}
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
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
