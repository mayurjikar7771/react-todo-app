import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';
import{message} from 'antd';
import actions from './Action';  
//worker saga 
function* userLogin({type,payload}) {
    // hit the API  to check user exits or not
    const result = yield call(axios.get,`https://jsonplaceholder.typicode.com/users?email=${payload}`);
    //console.log('inside saga',payload);
    if(result.data.length){
        Cookies.set('token',result.data[0].email);
        message.info("User authenticated");
        yield put(actions.storeUser(result.data[0]));
    }
    else{
        Cookies.remove('token');
        message.info("User does not Exits");
        yield put(actions.storeUser({}));
    }
}

//watcher saga
export default function* watchersaga(){
    yield takeEvery(actions.USER_LOGIN,userLogin);
}