import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../../reducer/user'
import NavigationBar from '../navigationbar'
import Recipe from '../recipe'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavigationBar />
        {this.props.currentUser ? (
          <h1>{`Welcome ${this.props.currentUser.firstName}`}</h1>
        ) : (
          <h1>Welcome</h1>
        )}
        <Recipe />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('checking user in global state', state.user.currentUser)
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
