/* import React from 'react';
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
  
  render() {
    return (
      <div className="App-header">
        <h1>RecipeMe</h1>
      <div className="Body">
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

export default App; */


import React, { Component } from "react";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50
    };

    return (
      <div>
        <Content/>
      </div>
    );
  }
}

export default App;