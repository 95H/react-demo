import React from 'react';
import './yp.css';
class Yp extends React.Component{
    constructor(){
        super();
        this.state={
            list:[],
            items:[]
        }
    }
    componentDidMount(){
        fetch('https://www.maizuo.com/api/film?__t=1510276961818&page=1&count=5&sortType=1&type=1').then(function(res){
            return res.json()
        }).then(function(data){
            this.setState({
                list:data.data.films
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
                   <div id='left-header'>
                       <p className='p-one'>
                           <span>正在热映</span>
                           /
                           <span>即将上映</span>
                       </p>
                       <p className='p-two'>
                           <span>热映场次</span>
                           <span>上映日期</span>
                           <span>评分</span>
                       </p>
                   </div>
                   <div id='left-cont'>
                        <ul id='cont-box'>
                            {
                                this.state.list.map((ele,index)=>{
                                    return <li key={index}>
                                        <div className='img-box'>
                                            <img src={ele.poster.origin} alt=""/>
                                        </div>
                                        <div className='xq-box'>
                                            <h4>{ele.name}</h4>
                                            <span>{ele.grade}</span>
                                            <span>{ele.intro}</span>
                                            <div className='xinxi'>
                                                <p>
                                                    <span>导演：</span>
                                                    {ele.director}
                                                </p>
                                                <p>
                                                    <span>主演：</span>
                                                    {ele.actors[0].name}
                                                </p>
                                                <p>
                                                    <span>类型：</span>
                                                    {ele.category}
                                                </p>
                                        </div>
                                            <p>
                                                <span>{ele.item.name}</span>
                                                <span>{ele.nation}</span>
                                                <span>{ele.runtime}分钟</span>
                                            </p>
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
export default Yp;