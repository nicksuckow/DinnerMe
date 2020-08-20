import React from 'react';
import './App.css';
import RecipeSelector from './RecipeSelector';
import recipe from './components/dinneroptions';

class App extends React.Component {
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

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div className="App">
        <h1>RecipeMe</h1>
      <div className="App-header">
        <RecipeSelector
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
      </div>
    );
  }
}

export default App;
