import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const NewTodo = (props) => {
    return <Search
        placeholder="Enter new task"
        enterButton="Add"
        size="large"
        value={props.todo}
        onSearch={props.newTodo}
        onChange={props.handleOnChange}
    />
}

export default NewTodo;