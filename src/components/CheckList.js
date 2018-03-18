import React, { Component } from 'react';
import MyCom from "./MyCom.js"
export default class CheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { name: "Football", price: "$49.9" },
                { name: "Baseball", price: "$9.99" },
                { name: "Basketball", price: "$29.9" }
            ],
            arr1: [
                { name: "Football", price: "$49.9" },
                { name: "Baseball", price: "$9.99" },
                { name: "Basketball", price: "$29.9" }
            ],
            val: ""
        };
        this.filter2 = this.filter.bind(this)
    }
    filter(e) {

        this.state.val = e.target.value;
        var arr2 = [].concat(this.state.arr1);
        var arr1 = arr2.filter(item => item.name.indexOf(this.state.val) !== -1)
        this.setState({ arr: arr1 });
    }
    filte3 =(e)=>{
        this.state.val = e.target.value;
        var arr2 = [].concat(this.state.arr1);
        var arr1 = arr2.filter(item => item.name.indexOf(this.state.val) !== -1)
        this.setState({ arr: arr1 });
    }
    render() {
   
        return (
            <div className="checklist">
                
                <span>第一种：this.filter.bind(this)</span>
                 <input value={this.state.val}   onChange={this.filter.bind(this)} /> <br/>
                <span>第二种：this.filter</span> 
                <input value={this.state.val}   onChange={this.filter2} /><br/>
                <span>第三种：this.filte3</span> 
                <input value={this.state.val}   onChange={this.filte3} /><br/>

                <ul>

                    {this.state.arr.map((item, ind) => <MyCom item={item} key={ind}></MyCom>)}

                </ul>       
            </div>
        );
    }
}

  
