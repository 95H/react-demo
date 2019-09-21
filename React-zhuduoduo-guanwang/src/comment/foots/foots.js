import React, {
	Component
} from 'react';
import './foots.scss';

class Foots extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="foot">
			   <span className="tel">联系电话：023-67728163</span>
               <p>重庆住多多科技有限责任公司 网站备案/许可证号： 渝ICP备17011499号-1</p>
			</div>
		)
	}
}
export default Foots;