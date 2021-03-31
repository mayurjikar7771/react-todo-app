import actions from './Action.js';

const initialState = [];

const Reducer = (state = initialState,action) => {

    const todos = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        
        case actions.STORE_TODO:
            todos.push(action.payload);
            return state;
        case actions.STORE_TODOS:
            return action.payload;
        case actions.UPDATE_TODO:
            //console.log('inside reducer', actions);
            todos.find(todo => todo.id === action.payload).completed = true;
            return todos;
        default:
            return state;
    }
}

export default Reducer;