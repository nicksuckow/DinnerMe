import React from "react";

class RecipeSelector extends React.Component {
  render() {
    return (
      <div className="quotebox">
        <div
         className="fadeIn"
         key={Math.random()}
        >
          <h1 id="recipe">"{this.props.recipe}"</h1>
        </div>
        <button
          id="newrecipe"
          onClick={this.props.handleClick}
        >
          New recipe
        </button>
      </div>
    );
  }
}

export default RecipeSelector;