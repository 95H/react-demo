const listReducer=(state={listData:['星期一','星期二','星期三']},action)=>{
    switch(action.type){
        case 'add':
            state.listData.push('今天星期一');
            return {listData:state.listData}; //返回新的对象
        default:
            return state
    }
};

const cartReducer=(state={cartData:['星期四','星期五','星期六']},action)=>{
    switch(action.type){
        case 'add1':
            state.cartData.push('今天星期几');
            return {cartData:state.cartData}; //返回新的对象
        default:
            return state
    }
};
export {listReducer,cartReducer}