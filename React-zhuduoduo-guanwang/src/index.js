import React from 'react';
import ReactDOM from 'react-dom';
import {
	Switch,
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
// import './index.css';
import App from './App';
import Czgy from './comment/czgy/czgy';
import Dzmx from './comment/dzmx/dzmx';
import Heads from './comment/headers/headers';
import Foots from './comment/foots/foots';
import Ljapp from './comment/ljapp/ljapp';
import Ppsrk from './comment/ppsrk/ppsrk';

import Zmfd from './comment/zmfd/zmfd';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	    <div>
	        <Heads />
			<Route exact path="/" component={App} />
			<Route path="/Czgy" component={Czgy} />
			<Route path="/Dzmx" component={Dzmx} />
			<Route path="/Ljapp" component={Ljapp} />
			<Route path="/Ppsrk" component={Ppsrk} />
			<Route path="/Zmfd" component={Zmfd} />
			<Foots />

		</div>
	</Router>,
	document.getElementById('root'));
registerServiceWorker();