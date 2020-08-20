import React from "react";

class RecipeSelector extends React.Component {
  render() {
    return (
      <div className="quotebox">
           <button
          id="newrecipe"
          onClick={this.props.handleClick}
        >
          New recipe
        </button>
        <div
         className="fadeIn"
         key={Math.random()}
        >
          <h1 id="recipe">"{this.props.recipe}"</h1>
        </div>
       
      </div>
    );
  }
}

export default RecipeSelector;