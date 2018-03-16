import React, { Component } from 'react';
import './index.css';
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
        }
    }

    filter(e) {

        this.state.val = e.target.value;
        var arr2 = [].concat(this.state.arr1);
        var arr1 = arr2.filter(item => item.name.indexOf(this.state.val) !== -1)
        this.setState({ arr: arr1 });
    }

    render() {
   
        return (
            <div className="checklist">
                
                <input value={this.state.val} ref="myInput" onChange={this.filter.bind(this)} />
                <ul>

                    {this.state.arr.map((item, ind) => <MyCom item={item} key={ind}></MyCom>)}

                </ul>
         

            </div>
        );
    }
}

  
