import axios from 'axios'

const GET_RECIPE = 'GET_RECIPE'
const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE'

const getRecipe = recipes => ({
  type: GET_RECIPE,
  recipes
})

const getSingleRecipe = recipe => ({
  type: GET_SINGLE_RECIPE,
  recipe
})

export const getRecipeFromServer = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/recipe/')
      dispatch(getRecipe(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSingleRecipeFromServer = recipeId => {
  console.log('called to reducer with id', recipeId)
  return async dispatch => {
    try {
      console.log('going in BE')
      const {data} = await axios.get(`/api/recipe/${recipeId}/`)
      console.log('data', data)
      dispatch(getSingleRecipe(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {
  recipes: [],
  singleSelectedRecipe: {}
}

function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipes: action.recipes
      }
    case GET_SINGLE_RECIPE:
      return {
        ...state,
        singleSelectedRecipe: action.recipe
      }
    default:
      return state
  }
}

export default recipeReducer
