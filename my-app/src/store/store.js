import {
	createStore
} from 'redux';
import reducer from '../reducer/del';


let store = createStore(reducer);
export default store;