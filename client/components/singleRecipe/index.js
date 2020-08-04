import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavigationBar from '../navigationbar'
import {getSingleRecipeFromServer} from '../../reducer/recipe'
import './index.css'

class SingleRecipe extends Component {
  componentDidMount() {
    if (Object.keys(this.props.recipe).length === 0) {
      this.props.getSingleRecipe(this.props.match.params.recipeId)
    }
  }

  render() {
    const {recipe} = this.props
    return (
      <div>
        <NavigationBar />

        <div className="single-recipe">
          <h1 className="title">{recipe.name}</h1>
          <span>{recipe.cuisine && recipe.cuisine.name}</span>
          <span>{recipe.course && recipe.course.name}</span>
          <div className="image">
            <img src={recipe.img} />
          </div>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map(ingredient => {
                return <li>{ingredient}</li>
              })}
          </ul>
          {/* <p>{recipe.instructions}</p> */}
          <ul>
            {recipe.instructions &&
              recipe.instructions.split('.').map(instruction => {
                return <li>{instruction}</li>
              })}
          </ul>
          <p>{recipe.specialInstructions}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.allRecipes.singleSelectedRecipe
})

const mapDispatchToProps = dispatch => ({
  getSingleRecipe: id => dispatch(getSingleRecipeFromServer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe)
