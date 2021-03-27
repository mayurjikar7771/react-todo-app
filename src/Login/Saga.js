import {takeEvery} from 'redux-saga/effects';
import actions from './Action';
//worker saga 
function* userLogin({type,payload}) {


    console.log('inside saga');

    // hit the API  to check user exits or not
}

//watcher saga
export default function* watchersaga(){
    yield takeEvery(actions.USER_LOGIN,userLogin);
}