import axios from 'axios'

const GET_RECIPE = 'GET_RECIPE'

const getRecipe = recipes => ({
  type: GET_RECIPE,
  recipes
})

export const getRecipeFromServer = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/recipe')
      dispatch(getRecipe(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const recipes = {}

function recipeReducer(state = recipes, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {
        recipes: action.recipes
      }
    default:
      return state
  }
}

export default recipeReducer
