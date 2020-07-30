import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
import {getMe} from './reducer/user'
// import {Login, Signup, UserHome} from './components'
// import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.getCurrentUser()
  }

  render() {
    const {isLoggedIn} = this.props
    console.log('Checking for user Routes.js', this.props.currentUser)
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        {isLoggedIn && (
          // console.log("user logged in!!!!")
          <Switch>
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: state.currentUser
    currentUser: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    // loadInitialData() {
    // dispatch(getMe())
    // }
    getCurrentUser: () => dispatch(getMe())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  // loadInitialData: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}
