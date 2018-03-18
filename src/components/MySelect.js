import React ,{Component} from "react";
export default class MySelect extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( <select 
                    onChange={this.props.onchangeHandle}
                    value={this.props.val}
                    name={this.props.name} >                        
                   <option > {this.props.val}</option>                      
                   {this.props.list.map((item, ind) => <option value={ind} key={ind}   >{item}</option>)}
                 </select> );
        }
}