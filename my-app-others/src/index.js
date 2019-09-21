import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
// import {createStore} from 'redux';//引用redux
// import Cart from './cart.js';// import {Provider} from 'react-redux';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// }  from 'react-router-dom'
import store from './store.js';



// class App extends React.Component {
//    轮播
// constructor(){
//     super();
//     this.state={
//         list:[1,2,3,4],
//         index:0,
//         t:null
//     };
//
// }
// componentDidMount(){
//     this.setState(()=>{
//         this.setState.t=setInterval(()=>{
//             this.setState({
//                 index:this.state.index+1
//             });
//             if(this.state.index>=4){
//                 this.setState({
//                     index:0
//                 })
//             }
//         },1000)
//     })
// }
// render(){
//     return(<div id='bigbox'>
//         <ul id='innerbox'>{
//             this.state.list.map((ele,index)=>{
//                 return (<li key={index} style={{display:index===this.state.index?'block':'none'}}>{ele}</li>)
//             })
//         }
//         </ul>
//
//     </div>)
//
// }

//选项卡
//     constructor(){
//         super();
//         this.state={
//             arr:['首页','简介','公司','联系我们']
//         }
//     }
//     render(){
//         return (
//             <div >
//                 <ul id='list'>
//                     {
//                         this.state.arr.map((ele,index)=>{
//                             return <li key={index} onClick={this.props.onChange.bind(this,index)}>{ele}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
// class Content extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             arr1:['1','2','3','4'],
//             index:0
//         };
//        this.onChange=this.onChange.bind(this)
//     }
//     onChange(index){
//         this.setState({
//             index:index
//         })
//     }
//     render(){
//         return(
//             <div id='tac'>
//                 <App onChange={this.onChange}/>
//                 <ul id="item">
//                     {
//                         this.state.arr1.map((ele,index)=>{
//                             return <li key={index} style={{display:this.state.index===index?'block':'none'}}>{ele}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//
// }
//
    // constructor(){
    //     super();
    //     this.state={
    //         list:['PG-one','VaVa','TT','艾福杰尼']
    //     };
    //     this.fnChange=this.fnChange.bind(this)
    // }
    // fnChange(index){
    //     console.log(index);
    //     this.setState({
    //
    //     })
    // }
//     render() {
//         return (
//             <div className="App">
//                 <ul id='box'>
//                     {
//                         this.state.list.map((ele,index)=>{
//                             return <li key={index} onClick={()=>this.fnChange(index) } style={{background:this.state.index===index?'aqua':'pink'}}>{ele}</li>
//                             //     传参
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
// //redux 练习
// var action={type:'lend'};  //action想法
// //reducer 处理行为
// function reducer(state={computer:10},action){
//     switch(action.type){ //进行判断
//         case 'lend':
//             return{computer:state.computer-1};
//         default: // 默认
//             return state
//     }
// }
// const store=createStore(reducer); // 创建仓库 用来存放应用的状态
// console.log(store.getState());
//
// class Button extends React.Component{
//     render(){
//         return <button onClick={this.props.rd}>触发行为</button>
//     }
// }
// class Redux extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             num:store.getState().computer
//         }
//     }
//     render(){
//         return( <div>
//             <h1>仓库里的电脑个数为{this.state.num}</h1>
//             <Button rd={this.minus}/>
//         </div>)
//     }
//     minus(){
//         console.log('请求数据');
//         store.dispatch({type:'lend'});//相当于触发事件
//     }
//     componentDidMount(){
//         store.subscribe(()=>{
//             // 可以手动订阅更新，也可以将事件绑定到视图层。
//             console.log(store.getState());
//             this.setState({
//                 num:store.getState().computer
//             })
//         })
//     }
// }

//todoList (redux)
// class Box extends  React.Component{
//     render(){
//         return <Provider store={store}>
//                     <Router>
//                         <div>
//                             <Route  exact path='/' component={App}/>
//                             <Route path='/cart' component={Cart}/>
//                         </div>
//                     </Router>
//         </Provider>
//     }
// }
////用来渲染的函数
const reg=()=>{
    ReactDOM.render(
        <div>
            {/*<Redux/>*/}
            {/*<Box/>*/}
            {/*<Content/>*/}
            <App/>
        </div>
        , document.getElementById('root'));

};
//监测数据的变动 渲染到视图中
store.subscribe(()=>{
    reg();
});
reg(); //初次渲染

