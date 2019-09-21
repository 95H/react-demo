import React, {
	Component
} from 'react';
import './zmfd.scss';
import Lunbo from '../lunbo/lunbo.js';
import Ewm from '../ewm/ewm.js';

class Zmfd extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='Zmfd'>招募房东页面</div>
		)
	}
}
export default Zmfd;