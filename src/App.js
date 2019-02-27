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

      ],
      newToDoDescription:''
    };
  }
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
   e.preventDefault();
   //console.log('handleSubmit called');
   if (!this.state.newTodoDescription) { return }
   const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
   this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
 }

  toggleComplete(index) {
console.log(index);
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });

  }

  deleteTodo(index){


  }

  render() {
    return (
      <div className="App">
      <ul>
      //Now we have to render or show the initial state of the component with the above todo list
      { this.state.todos.map( (todo, index) =>

        <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index)}/>)}
      </ul>
       <input type="text" value={ this.state.newTodoDescription }onChange={ (e) => this.handleChange(e) }/>
          <input onClick={ (e) => this.handleSubmit(e) } type="button" name="submit" value="Submit"/>
</div>
    );
  }
}

export default App;
