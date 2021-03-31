import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const Todo = (props) => {
    return <div className="todo">
      {
        props.completed ? <p style={{textDecoration: 'line-through'}}>{props.todo.title}</p> : <p>{props.todo.tite}</p>
      }
      <p>{props.title}</p>
     <CloseOutlined onClick={() => props.handleMarkCompleted(props.todo.id)} />
   </div>
}

export default Todo;