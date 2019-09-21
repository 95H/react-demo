import React, {
	Component
} from 'react';
import './lunb.scss';

import img1 from '../../static/1.gif';
import img2 from '../../static/2.gif';
import img3 from '../../static/3.gif';
import img4 from '../../static/4.gif';

class Lunbo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			itm: setInterval(() => {
				this.setState({
					index: this.state.index + 1
				})
				if (this.state.index >= 4) {
					this.setState({
						index: 0
					})
				}
			}, 2000)
		}
	}
	render() {
		let imgs = [img1, img2, img3, img4];
		let ims = {
			backgroundImage: 'url(' + img1 + ')'
		}
		return (
			<div>
	    	<div className='one_box'>
	   			{
	   				imgs.map((item,index)=>{
	   					return (
	   						<div className='divlb' 
	   						style={{backgroundImage:'url('+ item +')',
	   						opacity:this.state.index==index?1:0 }} key={index}>
	   						</div>:''
	   					)
	   				})
	   			}
	   			<div className='btn_box'>
	   				{/*<div className='btn_ul' onClick={()=>console.log(1)}>
	   					<div> </div>
	   				</div>*/}
	   			</div>
	      </div>
    	</div>

		);
	}
}
export default Lunbo;