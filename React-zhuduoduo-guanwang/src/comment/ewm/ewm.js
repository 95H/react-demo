import React, {
	Component
} from 'react';
import img1 from '../../static/zhudd-code.png';
import './ewm.scss';

class Ewm extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='ewm'>
               <div className='content3'>
                  <div className='content3_c'>
                    <img src={img1} className='img1' />
                    <div className='xiazai'>
                      <div className='xiazai_l'><a></a></div>
                      <div className='xiazai_r'><a></a></div>
                    </div>
                  </div>
               </div>
			</div>
		)
	}
}
export default Ewm;