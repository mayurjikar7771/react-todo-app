import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const NewTodo = (props) => {
    return <Input
        placeholder="Enter new task"
        
         size="large"
        value={props.todo}
        onChange={props.handleOnChange}
        
    />

}

export default NewTodo;

//onSearch={props.newTodo}
// enterButton="Add"