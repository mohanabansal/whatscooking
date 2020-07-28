import axios from 'axios'

const SIGNUP_USER = 'SIGNUP_USER'

const addNewUser = () => {
  return {
    type: SIGNUP_USER
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
    default:
      return state
  }
}

export default user
