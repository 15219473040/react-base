import React, { Component } from "react";
export default class ProductTable extends Component {
    render() {
        var arr=this.props.arr;
        if(arr){
             var arrSports = arr.filter(item => item.category ==="Sporting Goods");
             var arrElec = arr.filter(item => item.category ==="Electronics");
        } 
       
        console.log(arrSports)
        return (
            <div className='pro_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>                      
                    </thead>
                    <tbody>
                        <tr className={arrSports.length == 0 ? "dis-none bold" : "bold"}>
                            <td>{arrSports.length>0 ? arrSports[0].category ? arrSports[0].category:null:""}</td>
                        </tr>
                        {  
                            arrSports.map((item,ind)=>{
                                  return  <tr key={ind}>
                                             <td className={!item.stocked ? "t-red" : ""}>{item.name}</td>
                                            <td>{item.price}</td>
                                          </tr> })
                            
                        }
                        <tr className={arrElec.length==0?"dis-none bold":"bold"}>
                            <td>{arrElec.length > 0 ?  arrElec[0].category ? arrElec[0].category:null:""}</td>
                        </tr>
                        {
                            arrElec.map((item, ind) => {
                                return <tr key={ind}>
                                         <td className={!item.stocked?"t-red":""}>{item.name}</td>
                                         <td>{item.price}</td>
                                       </tr>
                            })

                        }
                        
                    </tbody>
                </table>
                

            </div>
        );
    }
}
