import React, {
  Component
} from 'react';
import Lunbo from '../lunbo/lunbo';
import img from '../../static/app-img-big.jpg';
import img1 from '../../static/zhudd-code.png';
import Ewm from '../ewm/ewm.js';
import li1 from '../../static/app-step-line.png';
import app_img_1 from '../../static/app-img-1.png';
import app_img_2 from '../../static/app-img-2.png';
import app_img_3 from '../../static/app-img-3.png';

import './ljapp.scss';

class Ljapp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className='ljapp'>
               <Lunbo />
               <div className='content'>
                  <div className='content_c'>
                    <h4>以品质为基础的社区</h4>
                    <p><img src={img} /></p>
                  </div>
               </div>
               <div className='content2'>
                  <div className='content2_c'>
                    <h4>如何使用住多多预定房源？</h4>
                    <ul>
                      <li className='lj_block'>
                        <img src={app_img_1} />
                        <h3>1.查找品质房源</h3>
                        <p>无论是整套房屋、独立单间</p>
                        <p>还是房车，别墅等特色房源</p>
                        <p>您都可以在住多多上找到</p>
                      </li>
                      <li className='lj_inline'>
                      <img src={li1} /></li>
                      <li className='lj_block'>
                         <img src={app_img_2}  />
                        <h3>2.申请预定房屋</h3>
                        <p>联系房东、确认日期、支付款</p>
                        <p>项，都能享用住多多APP的</p>
                        <p>快捷安全的服务</p>
                      </li>
                      <li className='lj_inline'>
                      <img src={li1} /></li>

                      <li className='lj_block'>
                         <img src={app_img_3}/>
                        <h3>3.体验家的感觉</h3>
                        <p>无论您在城市的哪个角落,</p>
                        <p>您都可以享受“家”的感觉</p>
                      </li>
                    </ul>
                  </div>
               </div>
               <Ewm  />
			</div>
    )
  }
}
export default Ljapp;