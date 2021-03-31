const actions ={
    FETCH_TODOS : 'FETCH_TODOS',
    fetchTodos: (payload) => ({type: actions.FETCH_TODOS,payload}),

    STORE_TODOS : 'STORE_TODOS',
    storeTodos : (payload) => ({type: actions.STORE_TODOS,payload}),

    ADD_TODO: 'ADD_TODO',
    addTodo : (payload) => ({type : actions.ADD_TODO,payload}),

    STORE_TODO: 'STORE_TODO',
    storeTodo : (payload) => ({type: actions.STORE_TODO,payload}),

    MARK_COMPLETED: 'MARK_COMPLETED',
    markCompleted : (payload) => ({type: actions.MARK_COMPLETED,payload}),

    UPDATE_TODO: 'UPDATE_TODO',
    updateTodo: (payload) => ({type: actions.UPDATE_TODO,payload})
}

export default actions;