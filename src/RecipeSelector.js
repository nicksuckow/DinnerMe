import React from "react";
import Button from '@material-ui/core/Button';


class RecipeSelector extends React.Component {
  render() {
    return (
      <div className="box"> 
        <div
         className="fadeIn"
         key={Math.random()}
        >
          <h4 id="recipe">{this.props.recipe}</h4>
        </div>
        <Button variant="contained"
        onClick={this.props.handleClick}
        >
        New Recipe
        </Button>
      </div>
    );
  }
}

export default RecipeSelector;