import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {addNewUserThunk, logoutUserFromServer} from '../../reducer/user'
import NavigationBar from '../navigationbar'
import {connect} from 'react-redux'
import './index.css'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
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
    const {currentUser} = this.props
    return (
      <div>
        <NavigationBar />
        {/* {this.props.currentUser &&
        Object.keys(this.props.currentUser).length !== 0 ? (
          <h1>{`Hello ${this.props.currentUser.firstName} !!!`}</h1>
        ) : (
          <h1>Hello !!!</h1>
        )} */}
        {currentUser && Object.keys(currentUser).length === 0 ? (
          <div className="signup-container">
            <div className="signup-input-container">
              <label>Firstname</label>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleChange}
              />
              <label>Lastname</label>
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleChange}
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <NavLink to="/login">
                <button
                  type="button"
                  onClick={() => {
                    this.props.addNewUser({
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email: this.state.email,
                      password: this.state.password
                    })
                  }}
                >
                  {' '}
                  SIGNUP
                </button>
              </NavLink>
              {/* <button type="button" onClick={this.props.logout}>
              {' '}
              Logout
            </button> */}
            </div>
          </div>
        ) : (
          <h2 className="logout-message">
            Please logout to signup as a new user
          </h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('checking user in global state', state.user.currentUser)
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: user => dispatch(addNewUserThunk(user)),
    // getCurrentUser: () => dispatch(getMe()),
    logout: () => dispatch(logoutUserFromServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
