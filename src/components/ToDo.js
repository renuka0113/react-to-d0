import React, {Component} from 'react';

class ToDo extends Component{

 render(){
  return(


   <li>
{/* this.props.isCompleted, toffleComplete, description,deleteTodo are all defined in the React component
  and are passed here to the ToDo component
*/}
   <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
         <span>{ this.props.description }</span>
         {/*here we create the Delete button and create the onClick event handler.
           To the onClick event handler we pass the deleteTodo function.The deleteTodo function is
           defined in the App.js. This means that we are saying,when the Delete button is "clicked",the deleteTodo method should
           be called
         */}
   <input onClick={ this.props.deleteTodo} type="button" name="delete" value="Delete"/>
   </li>




  );
 }
}

export default ToDo;
