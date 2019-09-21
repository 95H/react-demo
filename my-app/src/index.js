import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import './index.css';
import {
	BrowserRouter as Router,
	HashRouter,
	Route,
	Switch,
	NavLink,
} from 'react-router-dom';
import store from './store/store';
import Home from './view/home';
import {
	applyMiddleware
} from 'redux';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Home />
// 	</Provider>,
// 	document.getElementById('root'));
// registerServiceWorker();
// 
// 
const Render = () => {
	(
		ReactDOM.render(
			<Provider store={store}>
				<Home />
			</Provider>,
			document.getElementById('root'))
	)
}
registerServiceWorker();
store.subscribe(() => Render())
Render()