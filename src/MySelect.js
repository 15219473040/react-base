import React ,{Component} from "react";

export default class MySelect extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            function(obj){
                return <select onChange={obj.props.onchangeHandle} value={obj.props.val} name={obj.props.name} >
               
              
                        <option > {obj.props.val}</option> 
                   
                 
                   
                    {obj.props.list.map((item, ind) => <option value={ind} key={ind}   >{item}</option>)}
                </select>
            }(this)
            
        );
        }
}