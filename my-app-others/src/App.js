import React from 'react';
import './App.css';
import Sy from './news1.js';
import Yp from './YingPian.js';
import Yy from './YingYuan';
import Image from './img/a.png';
import  Img from './img/ew.png';
import Image2 from './img/footer-a.png';
import Image3 from './img/footer-b.png';
import Image4 from './img/footer-c.png';
import Image5 from './img/footer-d.png';
import Image6 from './img/footer-f.png';
import Image7 from './img/footer-h.png';
import Image8 from './img/footer-e.png';

import {
    BrowserRouter as Router,
    Route,
    Link
}  from 'react-router-dom'
// import logo from './logo.svg';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Home from './component/home';
// import About from './component/about';
// import Content from './component/content';
// import store from './store.js'
// import {connect} from 'react-redux'
// const Home=()=>(
//     <div>
//         <h2>Home</h2>
//     </div>
// );
// const About=()=>(
//     <div>
//         <h2>About</h2>
//     </div>
// );
// const Topic=()=>(
//     <div>
//         <h2>南风知我意</h2>
//     </div>
// );
//路由
// const App=()=>(
//     <Router>
//         <div>
//             <ul id='lists'>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/about'>About</Link></li>
//                 <li><Link to='/content'>Topic</Link></li>
//             </ul>
//             <hr/>
//             <Route  exact path='/' component={Home}/>
//             <Route  path='/about/:id' component={About}/>
//             <Route path='/content' component={Content}/>
//         </div>
//     </Router>
// );

// class App extends Component {
//      //todoList 列表 数据的添加与删除
//     constructor(){
//         super();
//         this.state={
//             arr:[1,2,3,4],
//             text:''
//         };
//         this.add=this.add.bind(this);
//         this.deleteList=this.deleteList.bind(this);
//         this.changeValue=this.changeValue.bind(this)
//     }
//     render() {
//         return (<div>
//             <input type="text" value={this.state.text} onChange={this.changeValue}/>
//             <button onClick={this.add}>添加</button>
//                 <div id='list'>
//                     <ul>
//                         <ReactCSSTransitionGroup
//                             transitionName="example"
//                             transitionEnterTimeout={500}
//                             transitionLeaveTimeout={500}>
//                             {
//                                 this.state.arr.map((ele,index)=>{
//                                     return <li key={index} >
//                                         <strong>{ele}</strong>
//                                         <button onClick={()=>this.deleteList(index)}>删除</button>
//                                         {/*传入参数删除当前下标对应的值*/}
//                                     </li>
//                                 })
//                             }
//                         </ReactCSSTransitionGroup>
//                     </ul>
//                 </div>
//             </div>
//
//
//             // {/*<div className="App">*/}
//             //   {/*<header className="App-header">*/}
//             //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
//             //     {/*<h1 className="App-title">Welcome to React</h1>*/}
//             //   {/*</header>*/}
//             //   {/*<p className="App-intro">*/}
//             //     {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
//             //   {/*</p>*/}
//             // {/*</div>*/}
//         )
//     }
//     add(){
//         this.state.arr.push(this.state.text); //数据的添加 此时已添加完
//         this.setState({
//             arr:this.state.arr //因此输出arr即可
//         })
//     }
//     changeValue(e){ // input 获取数据 双向数据绑定
//         this.setState({
//             text:e.target.value
//         })
//
//     }
//     deleteList(index){
//         this.state.arr.splice(index,1);
//         this.setState({
//             arr:this.state.arr
//         })
//     }
//
// }
// const content=()=>{
//
// };
class App extends React.Component{
    constructor(){
        super();
        this.state={
            image:Image,
            img:Img,
            image2:Image2,
            image3:Image3,
            image4:Image4,
            image5:Image5,
            image6:Image6,
            image7:Image7,
            image8:Image8,
            list:[{path:'/',text:'首页'},
                {path:'/yp',text:'影片'},
                {path:'/yy',text:'影院'}],
            index:0
        }
    };
    change(index){
        this.setState({
            index:index
        })
    }
    render(){
        return(
            <div>
                <Router>
                <div id='bigBox'>
                    <div id='navBox'>
                        <ul id="nav">
                                    <li><img src={this.state.image} alt=""/></li>
                                    <li id='dizhi-box'>北京
                                        <div id='dz'>
                                            <ul>
                                                <span>热门</span>
                                                <li><a href="">北京</a></li>
                                                <li><a href="">上海</a></li>
                                                <li><a href="">广州</a></li>
                                                <li><a href="">深圳</a></li>
                                                <li><a href="">杭州</a></li>
                                                <li><a href="">成都</a></li>
                                                <li><a href="">重庆</a></li>
                                                <li><a href="">武汉</a></li>
                                                <li><a href="">长沙</a></li>
                                                <li><a href="">东莞</a></li>
                                                <li><a href="">佛山</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                        {
                                            this.state.list.map((ele,index)=>{
                                                return <li key={index} className='lianjie' onClick={this.state.change}>
                                                    <Link to={ele.path} >{ele.text}</Link>
                                                </li>
                                            })
                                        }
                                    <li>登录</li>
                                    <li>注册</li>
                                    <li id='xiazai-box'>App下载
                                        <div id='xiazai'>
                                            <img src={this.state.img} alt=""/>
                                            <p>扫码下载卖座APP</p>
                                        </div>
                                    </li>
                                </ul>
                    </div>
                    <Route  exact path='/' component={Sy}/>
                    <Route path='/yp' component={Yp}/>
                    <Route path='/yy' component={Yy}/>
                </div>
                </Router>
                <div className='footer'>
                    <div className='footer-1'>
                        <ul className='footer-1-1'>
                            <li>
                                <img src={this.state.image2} className='logo-f'/>
                                <p>电影订座  就上卖座</p>
                            </li>
                            <li>
                                <img src={this.state.image3} alt=""/>
                                <span>电话:</span>
                                <span id="moblie">400-1808-400</span>
                                <span>周日-周四：9:00-22:00 周五-周六：9:00-22:30</span>
                            </li>
                            <li>
                                <a href=""><img src={this.state.image4} alt=""/></a>
                                <a href="" className='tp-box'>
                                    <img src={this.state.image5} alt=""/>
                                    <div className='tp'>
                                    </div>
                                </a>
                                <a href="" className='tp-box'>
                                    <img src={this.state.image6} alt=""/>
                                </a>
                                <a href=""><img src={this.state.image7} alt=""/></a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-2'>
                        <div className='footer-2-1'>
                            <ul>
                                <li><a href="">关于卖座</a></li>
                                <li><a href="">联系我们</a></li>
                                <li><a href="">商务合作</a></li>
                                <li><a href="">合作伙伴</a></li>
                                <li><a href="">诚聘英才</a></li>
                                <li><a href="">使用帮助</a></li>
                                <li><a href="">退票服务</a></li>
                                <li><a href="">服务条款</a></li>
                                <li><a href="">社区管理</a></li>
                            </ul>
                        </div>
                        <p>Copyright © 2017 maizuo. All Rights Reserved 卖座网 版权所有 增值业务经营许可证:粤B2-200502318</p>
                        <img src={this.state.image8} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
    // render(){
    //     // const {listData,addListData}=this.props;
    //     // return <div>
    //     //     <input type="text" ref='aa'/>
    //     //     <ul>
    //     //         {
    //     //             listData.map((ele,index)=>{
    //     //                 return <li key={index}>{ele}</li>
    //     //             })
    //     //         }
    //     //     </ul>
    //     //     <button onClick={()=>addListData()}>添加</button>
    //     // </div>
    //
    //
    // }
}

export default App

// function mapStateToProps(state){
//     return {
//         listData:state.listReducer.listData
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         addListData:()=>dispatch({type:'add'})
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)


