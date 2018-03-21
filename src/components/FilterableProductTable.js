import React, { Component } from "react";
import ProductTable from "./ProductTable.js";
import arr from "../data/products.js"
export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            arr
        }
    }

    filter = () => {
        var flag = this.state.check
        this.setState({
            check: !flag
        });
        if (!this.state.check) {
            this.setState({

                arr: arr.filter(item => item.stocked === true)
            })
        } else {
            this.setState({

                arr: arr
            })
        }

    }
    search = () => {
        var val = this.myInput.value;
        this.setState({ arr: arr.filter(item => item.name.indexOf(val) != -1) })
    }
    render() {
        return (
            <div className='outbor'>
                <input type='text' placeholder='seach' ref={e => this.myInput = e} onChange={this.search} /><br />
                <input type='checkbox' id='myinput' checked={this.state.check} onChange={this.filter} />
                <label htmlFor='myinput'>  Only show products in stock  </label>
                <ProductTable arr={this.state.arr || []} />
            </div>
        );
    }
}
