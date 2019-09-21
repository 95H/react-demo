import React from 'react';
import './news1.css';
import Img1 from  './img/aa.jpg';
import Img2 from  './img/bb.png';
import Img3 from  './img/cc.png';
import Image1 from './img/b.jpg';
import Image2 from './img/c.jpg';
import Image3 from './img/d.jpg';
import Image4 from './img/e.jpg';
import Image5 from './img/f.jpg';
import Image6 from './img/g.jpg';
import Image7 from './img/h.jpg';

class Sy extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[Image1,Image2,Image3,Image4],
            arr1:[Image5,Image6,Image7],
            items:[],
            img1:Img1,
            img2:Img2,
            img3:Img3,
            index:0,
            index1:0,
            t:null,
            list:[],
            arr3:[]
        };
    }
    componentDidMount(){
        fetch('https://www.maizuo.com/api/film?__t=1509417527357&page=1&count=6&sortType=1&type=1').then(function(res){
            return res.json()
        }).then(function(data){
            this.setState({
                list:data.data.films
            });
        }.bind(this));
        fetch('https://www.maizuo.com/api/billboard/active?__t=1509627116136&type=1').then(function(res){
            return res.json();
        }).then(function(data){
            this.setState({
                items:data.data.billboards
            });
        }.bind(this));
        fetch('https://www.maizuo.com/api/comment?__t=1509879290070').then(function(res){
            return res.json();
        }).then(function(data){
            this.setState({
                arr3:data.data.comments
            })
        }.bind(this));
        this.setState(()=>{
            this.setState.t=setInterval(()=>{
                this.setState({
                    index:this.state.index+1,
                    index1:this.state.index1+1
                });
                if(this.state.index>=4){
                    this.setState({
                        index:0
                    })
                }
                if(this.state.index1>=2){
                    this.setState({
                        index1:0
                    })
                }
            },2000)
        })
    }
    render(){
        return (
            <div>
                <div id='header'>
                    <ul id='lunBo'>
                        {
                            this.state.arr.map((ele,index)=>{
                                return <li key={index} style={{display:index===this.state.index?'block':'none'}}>
                                    <img src={ele} alt=""/>
                                </li>
                            })
                        }
                    </ul>
                    <div id='im'>
                    </div>
                </div>
                <div id='cont'>
                    <div id='cont1'>
                        <div id='header1'>
                            <p className="p1">
                                <span>正在热映</span>
                                /
                                <span>即将上映</span>
                            </p>
                            <p className="p2">
                                <span>北京正在上映</span>
                                <a href="">45</a>
                                <span>部电影</span>&nbsp;&nbsp;&nbsp;
                                <a href="">更多》</a>
                            </p>
                        </div>
                        <ul id='header2'>
                            {
                                this.state.list.map((ele,index)=>{
                                    return <li key={index}>
                                        <img src={ele.poster.origin} alt=""/>
                                        <p>
                                            <span>{ele.name}</span>
                                            <span>{ele.grade}</span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <ul id='cont2'>
                        {
                            this.state.arr1.map((ele,index)=>{
                                return <li key={index} style={{display:index===this.state.index1?'block':'none'}}>
                                    <img src={ele} alt=""/>
                                </li>
                            })
                        }
                    </ul>
                    <div id='cont3'>
                        <h3 id='cont-h'>热门活动</h3>
                        <h3 id='cont-h3'>买座卡购买</h3>
                        <ul id='header3'>
                            {
                                this.state.items.map((ele,index)=>{
                                    return <li key={index}>
                                        <img src={ele.imageUrl} alt=""/>
                                        <a href="">{ele.name}</a>
                                    </li>
                                })
                            }
                            <li id='header3-right'>
                                <img src={this.state.img1} alt=""/>
                                <a href="">卖座卡</a>
                            </li>
                        </ul>
                    </div>
                    <div id='cont4Box'>
                        <div id='cont4'>
                            <h3>精华评论</h3>
                            <div id='pinglunBox'>
                                <ul id='pl'>
                                    {
                                        this.state.arr3.map((ele,index)=>{
                                            return <li key={index}>
                                                <img src={ele.user.avatorUrl} alt=""/>
                                                <div id='p1'>
                                                    <span>{ele.user.name}</span>
                                                    <span>评论了</span>
                                                    <span>{ele.film.name}</span>
                                                    <p id="p2">{ele.text}</p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div id='buy'>
                            <h3 id='buy-h3'>手机购票</h3>
                            <ul id='buy-ul'>
                                <li>
                                    <img src={this.state.img2} alt=""/>
                                    <div id='buy-wz'>
                                        <p>扫码下载</p>
                                        <p>卖座电影APP</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={this.state.img3} alt=""/>
                                    <div id='buy-wz'>
                                        <p>扫码关注</p>
                                        <p>卖座官方微信</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentWillUnmount(){
        clearInterval(this.setState.t)
    }
}
export default Sy;