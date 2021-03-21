import React from 'react';
import {
    CloseOutlined 
  } from '@ant-design/icons';

const Todo = (props) => {
    return <div className="todo">
      <p>{props.title}</p>
     <CloseOutlined  />
   </div>
}

export default Todo;