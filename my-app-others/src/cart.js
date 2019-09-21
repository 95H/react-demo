import React from 'react';
import store from './store.js';
import {connect} from 'react-redux';//用来两个函数和组件的关联
class Cart extends React.Component{ //直接进行渲染即可
    render(){
        const{cartData,addCartData}=this.props; //设置常量 获取到carData数据
        return <div>
            <ul>
                {
                    cartData.map((ele,index)=>{
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>
            <button onClick={()=>addCartData()}>添加</button>
        </div>
    }
}
function mapStateToProps(state){//传递数据 参数为state
    return{
        cartData:state.cartReducer.cartData //  传递的是cartReducer中的state数据
    }
}
function mapDispatchToProps(dispatch){// 发射行为 dispatch为参数 触发事件
    return {
        addCartData:()=>dispatch({type:'add1'})
    }
}
export  default connect(mapStateToProps,mapDispatchToProps)(Cart);