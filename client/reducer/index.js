import {combineReducers} from 'redux'
import user from './user'
import recipeReducer from './recipe'

const appReducer = combineReducers({
  user: user,
  allRecipes: recipeReducer
})

export default appReducer
