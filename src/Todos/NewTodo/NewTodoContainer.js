import React from 'react';
import NewTodo from './NewTodo';
import actions from './../Actions';
import {connect} from 'react-redux';

class NewTodoContainer extends React.Component {
    constructor(props) {
        super(props);
   
          console.log('props',props);
         this.state = {
              todo : ''
         }
      
    }
   
     NewTodo = (e) => {
    //console.log('add new todo');
      this.props.addTodo({id: this.props.user.id,title : this.state.todo});
     } 

     handleOnChange = (e) => {
         this.setState({todo: e.target.value});
     }
  
    render() {
        return <NewTodo  
         todo = {this.state.todo}
         NewTodo = {this.NewTodo}
         handleOnChange = {this.handleOnChange}
        />
    }
}



export default NewTodoContainer;