import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import createsagaMiddleware from 'redux-saga';

import Sagas from './Sagas';
import userReducer from './../Login/Reducer';
const rootReducer = combineReducers({
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createsagaMiddleware();
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(Sagas)


export default store;