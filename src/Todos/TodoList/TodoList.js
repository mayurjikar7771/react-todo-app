import React from 'react';
import Todo from './../Todo';

const TodoList = (props) => {
    return <div className="todolist">
         {
             props.todos.map(todo => <Todo todo={todo} key={todo.id} completed={todo.completed} handleMarkCompleted={props.handleMarkCompleted}/>)
         }
    </div>
}

export default TodoList;