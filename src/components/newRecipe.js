import React, { Component } from 'react';
import '../App.css';

class NewRecipe extends Component {
    render() {
      return (
        <div className='Body'>
                <form>
                  <input type="text" name="name" placeholder="What is the recipe name?" />
                  <input type="textarea" name="recipe" placeholder="How do you make it?" />
                  <button>Add Recipe</button>
                </form>
              </div>
      );
    }
  }

export default NewRecipe;
    
