import React, {Component} from 'react';

class ToDo extends Component{
 render(){
  return(
    //the description here we are getting from the App component

   <li>
   <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
         <span>{ this.props.description }</span>
   <input onClick={ this.props.DeleteTodo } type="button" name="delete" value="Delete"/>
   </li>




  );
 }
}

export default ToDo;
