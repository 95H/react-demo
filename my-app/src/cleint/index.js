// 1、 中间件： 就是为了解决异步数据流的问题
// 2、 applyMiddleware： 是一个存在于action和reducer之间的一个操作， 就是为了阻止数据直接进行修改
// 3、 自定义拦截action - > reducer的过程， 变为action - > applyMiddleware - > reducer
// 这种机制可以让我们改变数据流 实现如异步action。 action过滤 日志输出 异常报告等功能
// 4、 Reducer: 是纯函数， 不能处理过多的业务逻辑， 只能处理state的变化
// 5、 以前的同步redux写法： action - > reducer(state, action) - > store(reducer)
// 有中间件以后的写法： action - > applyMiddleware() - > reducer(state, action) - > store(reducer)
// 6、 store.dispath(): 是store提供的派生方法， 可以异步的去操作或者派发某个行为变化使用
// 7、 logger： 它不是Redux的API， 而是一个单独的第三方包(redux - logger) 的中间件的辅助处理
// 可以返回最新的state数据， 和applyMiddleware中间件配合使用
// 下载命令： npm install redux - logger--save - dev
// import logger from 'redux - logger'
// 8、 middlewares： middlewares数据map为新的middlewares数组
// 9、 compose: 方法将新的middlewares和store.dispatch结合起来， 生成一个新的dispatch方法
// 10、 logger、 thunk、 promise都起中间件的辅助作用， 三选一就行了, 一个能解决问题， 三个也能解决问题
// 可以混合使用（ 只不过处理不同的逻辑或问题罢了） logger参数必须传入到appMiddleware() 的最后面
// 11、 state中appMiddleware() 永远是最后一个参数 里面还可以传入一个参数 默认值initialState