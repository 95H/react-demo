import React,{Component} from'react';
import FetchJsonp from 'fetch-jsonp'
import  './about.css'
class About extends Component{
    constructor(){
        super();
        this.state={
            items:[]
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id='items'>
                    {
                       this.state.items.map((ele,index)=>{
                           return (
                               <li key={index}>
                                    <img src={ele.goodsListImg}/>
                                   <p>{ele.className}</p>
                                   <p>
                                       <strong>{ele.price}</strong> &nbsp; &nbsp;&nbsp;
                                       <span>{ele.discount}</span>
                                   </p>
                               </li>
                           )
                    })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        FetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?classID='+this.props.match.params.id).then(function(res){
            return res.json()
        }).then(function(data){
            this.setState({
                items:data
            })
        }.bind(this))
    }
}
export default About;