import React from "react";
import Button from '@material-ui/core/Button';


class RecipeSelector extends React.Component {
  render() {
    return (
      <div className="box">
        <Button variant="contained"
        onClick={this.props.handleClick}
        >
        New Recipe
        </Button> 
        <div
         className="fadeIn"
         key={Math.random()}
        >
          <h3 id="recipe">{this.props.recipe}</h3>
        </div>
       
      </div>
    );
  }
}

export default RecipeSelector;