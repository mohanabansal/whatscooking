import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../../reducer/user'

class Home extends Component {
  // async componentDidMount(){
  //   await this.props.getCurrentUser()
  // }

  render() {
    return (
      <div>
        {console.log('HOME PAGE', this.props.currentUser)}
        <h1>Welcome to what's cooking today...</h1>
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

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
