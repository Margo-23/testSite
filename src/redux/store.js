import { combineReducers, createStore } from 'redux';
import usersReducer from './redusers/usersReducer';


let reducers = combineReducers({
    getBlock:usersReducer
})

let store = createStore(reducers);


export default store;