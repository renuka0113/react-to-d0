import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  //the constructor below is used to assign component's initial state
  //when we call our constructor, we must call the parent constructor, and hence the super.
  constructor(props){
    super(props);
    //we are initializing the state of our component with todos array. This array has keys and properties
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
{/*In the line below, we are making a copy of the array this.state.todos
   We could have just done const todos=this.state.todos, but that will change the value of the actual
   array this.state.todos and we dont want that to happen, hence we use splice() here.
 */}
    const todos = this.state.todos.slice();
    {/*Here we are creating a variable todo which is a singl element of the array todos.
      So, todos[index] is a single element of the new array todos
    */}
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    
    this.setState({ todos: todos });

  }

  deleteTodo(index){

  const remainingTodos =this.state.todos.filter(todo => (this.state.todos.indexOf(todo) !== index));
  this.setState({ todos: remainingTodos});


  }



  render() {
    return (
      <div className="App">
      <ul>
      {/*Now we have to render or show the initial state of the component with the above todo
         list*/}
      { this.state.todos.map( (todo, index) =>
{/* In the line below, we are passing key index, functions as properties
to the ToDo component. See how the beginning of the line has ToDo, the name of the component.
This is the component to which we are passing all these functions and variables
*/}
        <ToDo key={index} deleteTodo={ () => this.deleteTodo(index)} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index)}/>)}
      </ul>
       <input type="text" value={ this.state.newTodoDescription }onChange={ (e) => this.handleChange(e) }/>
          <input onClick={ (e) => this.handleSubmit(e) } type="button" name="submit" value="Submit"/>
</div>
    );
  }
}

export default App;
