import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logoutUserFromServer} from '../../reducer/user'
import './index.css'

class NavigationBar extends Component {
  render() {
    console.log('Nav bar', this.props.currentUser)
    return (
      <div className="navbar">
        <ul>
          <NavLink to="/signup">Signup</NavLink>
          {this.props.currentUser &&
          Object.keys(this.props.currentUser).length !== 0 ? (
            <NavLink to="/" onClick={() => this.props.logout()}>
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          {/* <NavLink to="/login">{this.props.currentUser && Object.keys(this.props.currentUser).length!==0 ? 'Logout' : 'Login'}</NavLink> */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUserFromServer())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
