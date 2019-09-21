import React, {
	Component
} from 'react';
import './App.scss';
import Lunbo from './comment/lunbo/lunbo';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="App">
			<div className="cont">
               <Lunbo />
			</div>
			<div className="cont_t">
			   <div className="big">
			      <div className="bigs bigs1">
			         <div className="smalls"></div>
			      </div>
			      <div className="bigs bigs2">
			         <div className="smalls"></div>
			      </div>
			      <div className="bigs bigs3">
			         <div className="smalls"></div>
			      </div>
			      <div className="bigs bigs4">
			         <div className="smalls"></div>
			      </div>
			   </div>
			</div>
          </div>
		);
	}
}

export default App;