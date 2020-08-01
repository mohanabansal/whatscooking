import React, {Component} from 'react'
import {connect} from 'react-redux'
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
      <div className="single-recipe">
        <h1 className="title">{recipe.name}</h1>
        <div className="image">
          <img src={recipe.img} />
        </div>
        <p>{recipe.description}</p>
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
