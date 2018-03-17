import React,{Component} from "react"
import dsy from "./data/area.js"
import MySelect from "./MySelect.js"
export default class City extends Component{
    constructor(props){
        super(props);
        this.state={
            all: dsy.Items,
            list_pro: dsy.Items['0'],
            list_city:["市"],
            list_area: ["区"],
      
            valP:"省",
            valC:"市",
            valA:"区",
            pId:0,
            cId:0,
            aId:0
        }
       
    }
    check(e){
        var tar =e.target;
        var tarName = tar.name
       
        if (tarName=='pro'){
            // this.setState({ list_pro: this.state.list_pro[tar.value]})
            // this.setState({ list_city: this.getArray(tarName,"0_", tar.value)})
            // this.setState({valP:this.state.list_pro[tar.value]})
            this.setState({ valP: this.state.list_pro[tar.value] })
            this.setState({ list_city: this.getArray(tarName, "0_", tar.value) })
            console.log(tar)
        }
        if(tarName=="city"){
            console.log(this.pId + tar.value)
            this.setState({ valC: this.state.list_city[tar.value] })
            var areaArr=this.getArray(tarName,this.pId+"_",tar.value )
            this.setState({list_area:areaArr})
        }
        if(tarName=='area'){
            this.setState({ valA: this.state.list_area[tar.value] })
        }
        // console.log(this.refs[name].props.val)
    } 
    getArray(tar,fir,sec){
        var id=fir+sec
        if(tar=="pro"){
            this.pId=id;
        }
        if(tar=="city"){
            this.cId=id;
        }
        console.log(id, this.state.all[id])
        return this.state.all[id]
    }
 
    render(){
        return (<div> 
            <MySelect name="pro" ref="pro" list={this.state.list_pro||[]} onchangeHandle={this.check.bind(this)} val={this.state.valP} />
            <MySelect name="city" ref="city" list={this.state.list_city || []} onchangeHandle={this.check.bind(this)} val={this.state.valC} />
            <MySelect name="area" ref="area" list={this.state.list_area || []} onchangeHandle={this.check.bind(this)} val={this.state.valA} />
        </div>)
    }
}