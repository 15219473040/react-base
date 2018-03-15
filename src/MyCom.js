import React,{Component} from "react";
import "./App.css";
export default class MyCom extends Component{
    render(){
        return (
            function(obj){
                return <li className="n" key={obj.props.ind}> {obj.props.item.name}:{obj.props.item.price}</li>
            }(this)
           
        );
    }
}