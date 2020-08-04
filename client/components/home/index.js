import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../../reducer/user'
import NavigationBar from '../navigationbar'
import Recipe from '../recipe'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <NavigationBar /> */}
        <div className="content">
          {/* {this.props.currentUser &&
          Object.keys(this.props.currentUser).length !== 0 ? (
            <h1 className="welcome">{`Welcome ${
              this.props.currentUser.firstName
            }`}</h1>
          ) : (
            <h1 className="welcome">Welcome</h1>
          )} */}
          <Recipe />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   getCurrentUser: () => dispatch(getMe()),
// })

export default connect(mapStateToProps, null)(Home)
