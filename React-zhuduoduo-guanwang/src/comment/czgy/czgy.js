import React, {
	Component
} from 'react';
import './czgy.scss';
import Lunbo from '../lunbo/lunbo.js';
import Ewm from '../ewm/ewm.js';
import img1 from '../../static/partner1.jpg';
import img2 from '../../static/partner2.jpg';
import img3 from '../../static/partner3.jpg';
import img4 from '../../static/partner4.jpg';
import img5 from '../../static/partner5.jpg';
import img6 from '../../static/partner6.jpg';
import img7 from '../../static/partner7.jpg';
import img8 from '../../static/partner8.jpg';
import img9 from '../../static/partner9.jpg';
import img10 from '../../static/partner10.jpg';
import img11 from '../../static/partner11.jpg';
import img12 from '../../static/partner12.jpg';

class Czgy extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='czgy'>
               <Lunbo />
               <div className="cont1">
                  <div className="cont1_c">
                    <h4>选择住多多的理由</h4>
                    <h5>SELECT REASON</h5>
                    <ul>
                    	<li>
                    		<div>
                    			<i className='img1'></i>
                    			<p>品质公寓，全线进驻</p>
                    		</div>
                    	</li>
                    	<li>
                    		<div>
                    			<i className='img2'></i>
                    			<p>认证实拍，实时更新</p>
                    		</div>
                    	</li>
                    	<li>
                    		<div>
                    			<i className='img3'></i>
                    			<p>精致装修，配套服务</p>
                    		</div>
                    	</li>
                    	<li>
                    		<div>
                    			<i className='img4'></i>
                    			<p>促销秒杀，优惠多多</p>
                    		</div>
                    	</li>
                    </ul>
                  </div>
               </div>
               <div className='cont2'>
                  <div className='cont2_c'>
                     <ul>
                     	<li>
                     		<i className='peitao1'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao2'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao3'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao4'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao5'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao6'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao7'></i>
                     		<i className='peitaon'></i>
                     	</li>
                     	<li>
                     		<i className='peitao8'></i>
                     	</li>
                     </ul>
                  </div>
               </div>
               <div className='cont3'>
                  <div className='cont3_c'>
                     <h4>合作品牌</h4>
                     <h5>COOPERATION BRAND</h5>
                     <ul>
                     	<li><img src={img1} /></li>
                     	<li><img src={img2} /></li>
                     	<li><img src={img3} /></li>
                     	<li><img src={img4} /></li>
                     	<li><img src={img5} /></li>
                     	<li><img src={img6} /></li>
                     	<li><img src={img7} /></li>
                     	<li><img src={img8} /></li>
                     	<li><img src={img9} /></li>
                     	<li><img src={img10} /></li>
                     	<li><img src={img11} /></li>
                     	<li><img src={img12} /></li>
                     </ul>
                  </div>
               </div>
               <div className='cont4'>
                  <div className='cont4_c'>
                    <h4>行业倡议</h4>
                    <h5>INDUSTRY INITIATIVE</h5>
                    <ul>
                    	<li>
                    		<i className='xie1'></i>
                    		<p>房屋质量问题无责换租</p>
                    	</li>
                    	<li>
                    		<i className='xie2'></i>
                    		<p>退租押金3个工作日返还</p>
                    	</li>
                    	<li>
                    		<i className='xie3'></i>
                    		<p>3天不满意退款</p>
                    	</li>
                    </ul>
                  </div>
               </div>
               <Ewm />
			</div>
		)
	}
}
export default Czgy;