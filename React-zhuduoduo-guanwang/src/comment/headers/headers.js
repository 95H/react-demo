import React, {
	Component
} from 'react';
import './headers.scss';
import {
	Link
} from 'react-router-dom';
import Logo from '../../static/logo.png';
import imgr from '../../static/new-index-menu.png';

class Heads extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: false
		};
	}
	componentDidMount() {
		this.clickNum();
	}
	clickNum() {
		var imgr = document.querySelector('.imgr');
		var nn = document.querySelector('.nn');

		imgr.onclick = function() {
			nn.style.display = 'block';
			nn.style.width = '100%';

			// var flag = true;
			// if (flag) {
			// 	flag = false;
			// 	nn.style.display = 'block';
			// 	nn.style.width = '100%';
			// 	flag = true;
			// } else {
			// 	flag = true;
			// 	nn.style.display = 'none';
			// 	//nn.style.width = '100%';
			// }

		}
	}
	render() {
		let li = [{
			'name': '首页',
			path: ''
		}, {
			'name': '了解APP',
			path: 'Ljapp'
		}, {
			'name': '长租公寓',
			path: 'Czgy'
		}, {
			'name': '短租民宿',
			path: 'Dzmx'
		}, {
			'name': '招募房东',
			path: 'Zmfd'
		}, {
			'name': '品牌商入口',
			path: 'Ppsrk'
		}];
		return (
			<div className='heads'>
                <div className='heads_c'>
                   <img src={ Logo } className="logo" />
                   <img src={imgr} className="imgr" /> 
                   <ul className="uu nn">
                   	 { li.map((item,index)=>{
                       return(
                         <li key={index}><Link to={item.path}>{item.name}</Link></li>
                       	)
                   	 }) }
                   </ul>
                </div>
			</div>
		)
	}
}
export default Heads;