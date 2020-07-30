import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../../reducer/user'
import NavigationBar from '../navigationbar'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     user: this.props.currentUser
  //   })
  // }

  render() {
    return (
      <div className="home">
        <NavigationBar />
        {console.log(
          'HOME PAGE global state--------->',
          this.props.currentUser
        )}
        {this.props.currentUser ? (
          <h1>{`Welcome ${this.props.currentUser.firstName}`}</h1>
        ) : (
          <h1>Welcome</h1>
        )}
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
