import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createsagaMiddleware from 'redux-saga';

import Sagas from './Sagas';
import userReducer from './../Login/Reducer';
import todoReducer from './../Todos/Reducer';


const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createsagaMiddleware();
const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);  
sagaMiddleware.run(Sagas)


export  {
    
    store,
    persistor

};