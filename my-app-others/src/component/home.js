import React,{Component} from 'react'
import './home.css'
import {
    BrowserRouter as Router,
    Route,
    Link
}  from 'react-router-dom'
class Home extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    render(){
        console.log(this.props);
     return(<div id='box'>
         <ul id='list'>
             {
                 this.state.list.map((ele,index)=>{
                     return <li key={index}>
                                  <Link to={'/about/'+ele.classID}>
                                         {ele.className}
                                  </Link>
                         </li>
                 })
             }
         </ul>
     </div>)
    }
    componentDidMount(){
        fetch(' http://datainfo.duapp.com/shopdata/getclass.php').then(function(res){
            return res.json()
        }).then(function(data){
            this.setState({
                list:data
            })
        }.bind(this))
    }
}
export default Home;