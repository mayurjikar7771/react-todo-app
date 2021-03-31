import {takeEvery, call,put} from 'redux-saga/effects';
import axios from 'axios';
import actions from './Action';
import { message } from 'antd';

//worker saga
function* fetchTodos(action){
   // console.log('fetch todos',action);

    const {payload} = action;
    const result = yield call(axios.get,`https://jsonplaceholder.typicode.com/todos?userId=${payload}`);

    //console.log('result',result);

    yield put(actions.storeTodos(result.data));
}

function* addTodo(action){
    //console.log('add todo');

    const {id,title} = actions.payload;

    const result = yield call(axios.post,`https://jsonplaceholder.typicode.com/todos`,{

        userId: id,
        title,
        completed: false

    });
    //console.log('result',result);

    yield put(actions.storeTodo(result.data));
}

function* markCompleted(action){
    //console.log('mark completed');
    const {payload} = action;
    const result = yield call(axios.patch,`https://jsonplaceholder.typicode.com/todos/${payload}`,{
        completed: true
    });
   message.info('todo mark is completed');
   // console.log('result',result); 

   yield put(actions.updateTodo(payload));
}


//watcher saga

export default function* watchersaga() {
    yield takeEvery(actions.FETCH_TODOS,fetchTodos);
    yield takeEvery(actions.ADD_TODO,addTodo);
    yield takeEvery(actions.MARK_COMPLETED,markCompleted);
}