import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </ul>
      </div>
    )
  }
}

export default connect(null, null)(NavigationBar)
