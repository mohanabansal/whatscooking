import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logoutUserFromServer} from '../../reducer/user'
import './index.css'

class NavigationBar extends Component {
  render() {
    const {currentUser} = this.props
    return (
      <div className="navbar">
        <ul className="menu">
          <div className="left">
            {currentUser && Object.keys(currentUser).length !== 0 ? (
              <span>{currentUser.firstName}</span>
            ) : (
              ''
            )}
          </div>
          <NavLink to="/recipe" className="menu-option">
            Recipes
          </NavLink>
          <NavLink to="/signup" className="menu-option">
            Signup
          </NavLink>
          {this.props.currentUser &&
          Object.keys(this.props.currentUser).length !== 0 ? (
            <NavLink
              to="/"
              onClick={() => this.props.logout()}
              className="menu-option"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" className="menu-option">
              Login
            </NavLink>
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
