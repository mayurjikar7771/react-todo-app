import {all} from 'redux-saga/effects';

import userSaga from './../Login/Saga';
import todoSaga from './../Todos/Saga';



export default function* sagas() {
    yield all([
        userSaga(),
        todoSaga()
    ]);
}