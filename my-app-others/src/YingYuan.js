import React from 'react';
import './yy.css';
class Yy extends React.Component{
    constructor(){
        super();
        this.state={
            list:[],
            items:[]
        }
    }
    componentDidMount(){
        fetch('https://www.maizuo.com/api/cinema?__t=1510483623392').then(function(res){
            return res.json()
        }).then(function(data){
            this.setState({
                list:data.data.cinemas
            });
        }.bind(this));
        fetch('https://www.maizuo.com/api/billboard/active?__t=1510389198214&type=2').then(function(res){
            return res.json();
        }).then(function(data){
            this.setState({
                items:data.data.billboards
            })
        }.bind(this))
    }
    render(){
        return(
            <div id='yp-box'>
                <div id='left-box'>
                    <div id='left-header1'>
                        <p >
                            <span>影院列表</span>
                        </p>
                        <input type="text" placeholder='请输入你想去的电影院'/>
                    </div>
                    <div id='left-header2'>
                        <ul id='header-ul'>
                            <li>区域：</li>
                            <li>全部</li>
                            <li>朝阳区</li>
                            <li>东城区</li>
                            <li>大东区</li>
                            <li>通州区</li>
                            <li>顺义区</li>
                            <li>海淀区</li>
                            <li>昌平区</li>
                            <li>西城区</li>
                            <li>丰台区</li>
                            <li>密云区</li>
                            <li className='l'>房山区</li>
                            <li>门头沟区</li>
                            <li>石景山区</li>
                            <li>平谷区</li>
                            <li>怀柔区</li>
                            <li>延庆县</li>
                        </ul>
                    </div>
                    <div id='left-cont'>
                        <ul id='cont-box1'>
                            {
                                this.state.list.map((ele,index)=>{
                                    return <li key={index}>
                                        <div className='img-box1'>
                                            <img src={ele.logoUrl} alt=""/>
                                        </div>
                                        <div className='xq-box1'>
                                            <h4>{ele.name}</h4>
                                            <div className='xinxi1'>
                                                <p>
                                                    <span>电话：</span>
                                                    {ele.telephones}
                                                </p>
                                                <p>
                                                    <span>地址：</span>
                                                    {ele.address}
                                                </p>
                                            </div>

                                        </div>
                                        <button>影片详情</button>
                                    </li>
                                })
                            }
                        </ul>
                        <div id='liebiao'>
                            <span>上一页</span>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                            <span>下一页</span>
                        </div>
                    </div>
                </div>
                <div id='right-box'>
                    <h3>热门活动</h3>
                    <ul id='right-ul'>
                        {
                            this.state.items.map((ele,index)=>{
                                return <li key={index}>
                                    <img src={ele.imageUrl} alt=""/>
                                    <p>{ele.name}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Yy;