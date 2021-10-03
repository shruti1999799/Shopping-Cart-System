import React, { Component } from 'react'

import "./Product.css"

class ProductList1  extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }   
    componentDidMount(){
        fetch("http://localhost:8093/products").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({list:result})
            })
        })
    }

    render() {
        return (

             <div className="products">
                 {this.state.list.map(function(p,index){
                     return(
                     <div className="card">
                         <div>
                             <img className="product-image"
                             src={p.image}
                             alt={p.name}
                             />
                         </div>
                         <div>
                             <h3 className="product-name">{p.name}</h3>
                         </div>
                         <div className="product-price">₹{p.price}</div>
                         <div><button className="product-add-button">Add to cart</button></div>
                     </div>
                 )})}
             </div>
                     
                 
         
                //  {this.state.list.map(function(p, index){
                //       return(
                //           <tr>
                //                <td><img style={{width:150}} src={p.image} /></td>
                //                <td>{p.name}</td>
                //                <td>{p.category}</td>
                //                <td>₹{p.price}</td>
                               
                //                <td><Button variant="outline-success" as={Link} to={`/view/${p.id}`}>View Details</Button></td>
                //                </tr>
                //       );
                //   })}
               
    
        )
    }
}

export default ProductList1 




