import React,{Component} from "react";
import "../App.css";
export default class MyCom extends Component{
    render(){
       
       return <li className="n" key={this.props.ind}>
                 {this.props.item.name}:{this.props.item.price}
              </li>
           
        ;
    }
}