import React from "react";
import Button from '@material-ui/core/Button';

const style = {
  background: '#fcba03',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
};


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
        <Button style={style} onClick={this.props.handleClick}>New Recipe</Button>       
      </div>
    );
  }
}

export default RecipeSelector;