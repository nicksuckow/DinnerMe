import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js';

class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('recipes');
    const item = {
      ingredients: this.state.recipe,
      name: this.state.name
    }
    itemsRef.push(item);
    this.setState({
      recipe: '',
      name: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
    render() {
      return (
        <div className='Body'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="name" placeholder="What is the recipe name?" onChange={this.handleChange} value={this.state.name} />
                  <input type="textarea" name="recipe" placeholder="How do you make it?" onChange={this.handleChange} value={this.state.recipe}/>
                  <button>Add Recipe</button>
                </form>
              </div>
      );
    }
  }

export default NewRecipe;
    
