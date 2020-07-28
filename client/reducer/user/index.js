import axios from 'axios'
import history from '../../history'

const SIGNUP_USER = 'SIGNUP_USER'
const GET_USER = 'GET_USER'

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
  console.log('in auth reducer')
  return async dispatch => {
    try {
      console.log(credentials)
      const {email, password} = credentials
      console.log(email, password)
      const data = await axios.post('/api/auth/login', {email, password})
      console.log('req sent', data)
      dispatch(getUser(data))
      history.push('/')
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
    default:
      return state
  }
}

export default user
