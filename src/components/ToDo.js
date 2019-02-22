import React, {Component} from 'react';

class ToDo extends Component{
 render(){
  return(
    //the description here we are getting from the App component
   <li>
   <input type="checkbox" checked={ this.props.isCompleted } />
         <span>{ this.props.description }</span>
    </li>
  );
 }
}

export default ToDo;
