import axios from 'axios'
import history from '../../history'

const SIGNUP_USER = 'SIGNUP_USER'
const GET_USER = 'GET_USER'
const GET_ME = 'GET_ME'
const LOGOUT = 'LOGOUT'

const addNewUser = () => {
  return {
    type: SIGNUP_USER
  }
}

const getUser = currUser => {
  return {
    type: GET_USER,
    currUser
  }
}

const gotMe = currentUser => {
  console.log('reducer current user', currentUser)
  return {
    type: GET_ME,
    currentUser
  }
}

const logoutUser = () => ({
  type: LOGOUT
})

export const addNewUserThunk = currentUser => {
  console.log('reducer', currentUser)
  return async dispatch => {
    try {
      const {firstName, lastName, email, password} = currentUser
      await axios.post('/api/users', {
        firstName,
        lastName,
        email,
        password
      })
      dispatch(addNewUser())
    } catch (error) {
      console.log(error)
    }
  }
}

export const auth = credentials => {
  return async dispatch => {
    try {
      const {email, password} = credentials
      const data = await axios.post('/api/auth/login', {email, password})
      dispatch(getUser(data))
      history.push('/signup')
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMe = () => {
  console.log('GET ME reducer called')
  return async dispatch => {
    try {
      console.log('Making call to auth/me BE')
      const {data} = await axios.get('/api/auth/me')
      console.log('data from GET ME reducer', data)
      dispatch(gotMe(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const logoutUserFromServer = () => {
  console.log('logout called')
  return async dispatch => {
    try {
      await axios.delete('/api/auth/')
      dispatch(logoutUser)
    } catch (error) {
      console.log(error)
    }
  }
}

// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

const currentUser = {}

function user(state = currentUser, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return state
    case GET_USER:
      return {
        currentUser: action.currUser
      }
    case GET_ME:
      return {
        currentUser: action.currentUser
      }
    case LOGOUT:
      return {
        currentUser: {}
      }
    default:
      return state
  }
}

export default user
