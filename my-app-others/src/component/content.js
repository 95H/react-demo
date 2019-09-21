import React,{Component} from 'react';
class Content extends Component{
    constructor(){
        super();
        this.state={
            hours:null,
            t:null
        }
    }
    render(){
        return(
            <div id='box'>
                <span id='days'>现在是北京时间:</span>
                <span id='hours'>:</span>
                <span id='minute'>:</span>
                <span id='second'> </span>
            </div>
        )
    }
    componentDidMount(){
        this.setState(()=>{
            this.setState.t=setInterval(()=>{
                this.setState(()=>{
                    return {
                        hours:new Date()
                    }
                })
            },1000)
        })
    }
}
export default Content;