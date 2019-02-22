import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  //the constructor below is used to assign component's initial state
  //when we call our constructor, we must call the parent constructor, and hence the super.
  constructor(props){
    super(props);
    //we are initializing the state of our component with todos array. This array has keys and properties.
    this.state={
      todos:[{description:'walk the cat', isCompleted:true},
             {description:'throw the dishes away', isCompleted:false},
             {description:'Buy new dishes', isCompleted:false}

      ]
    };
  }
  toggleComplete(index) {
    console.log(index);
  }
  render() {
    return (
      <div className="App">
      <ul>
      //Now we have to render or show the initial state of the component with the above todo list
      { this.state.todos.map( (todo, index) =>

            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index) }/>
          )}
      </ul>




      </div>
    );
  }
}

export default App;
