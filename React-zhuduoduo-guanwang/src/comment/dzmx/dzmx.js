import React, {
	Component
} from 'react';
import './dzmx.scss';
import Lunbo from '../lunbo/lunbo.js';
import Ewm from '../ewm/ewm.js';

class Dzmx extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='dzmx'>
               <Lunbo />
               <Ewm />
			</div>
		)
	}
}
export default Dzmx;