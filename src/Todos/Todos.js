import React from 'react';

import NewTodo from './NewTodo/NewTodo';
import TodoList from './TodoList/TodoListContainer';
const Todos = () => {
    
    return <div style={{
        background: '#ECECEC', padding: '100px', width: '80%', margin: '100px auto'
    }}>
      <NewTodo />
      <TodoList />
    </div>
}

export default Todos;