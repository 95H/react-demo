import {
	DEL,
	CREAT,
	PAY
} from '../action/delete';
import {
	combineReducers
} from 'redux';

const initialState = {
	del: ["活力", "自由", "奔放"],
	solary: 10000,
	pay: 'overpay'
}

export let del = (state = initialState, action) => {
	// state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case DEL:
			state.del.push("热情");
			return Object.assign({}, state, {
				del: state.del
			})
		default:
			return state;

	}
};

export let creat = (state = initialState, action) => {
	// state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case CREAT:
			state.solary += 10000;
			return Object.assign({}, state, {
				solary: state.solary
			})
		default:
			return state;

	}
};

export let pay = (state = initialState, action) => {
	// state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case PAY:
			state.pay += '一生所求无非真爱与自由'
			return Object.assign({}, state, {
				pay: state.pay
			})
		default:
			return state;
	}
};


const reducer = combineReducers({
	del,
	creat,
	pay
})
export default reducer;