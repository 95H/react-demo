import {createStore,combineReducers} from 'redux'; //combineReducers 合并
import * as reducers from './reducers.js'; // *as 全部改成reducers
const data=combineReducers(reducers);//将reducers合并
const store=createStore(data);//只有一个store
export default store;