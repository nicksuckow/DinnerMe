import React from 'react';
import '../App.css';
import RecipeSelector from '../RecipeSelector';
import recipe from '../components/dinneroptions';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: recipe[0].recipe,
    };
  }
  randomRecipe() {
    const randomNumber = Math.floor(Math.random() * recipe.length);
    return recipe[randomNumber];
    
  }
  shuffleRecipe(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomRecipe = this.randomRecipe();
    this.setState({
      recipe: generateRandomRecipe.recipe,
    });
    this.shuffleRecipe(recipe)
  };
  
  render() {
    return (
      <div>
        <h1>RecipeMe</h1>
      <div>
        <h4>Hit the button to randomly select a new recipe</h4>
        <RecipeSelector
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
      </div>
    );
  }
}

export default Content;
    
