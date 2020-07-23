import React, {Component} from 'react'
import {addNewUserThunk} from '../../reducer/user'
import {connect} from 'react-redux'

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
    console.log(this.state)
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
        />
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
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: user => dispatch(addNewUserThunk(user))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
