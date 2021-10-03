import React from 'react'
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StripeButton from './stripe.component';

function PaymentMethod() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getData();
    }, [])
    

    async function getData(){
        let result =await fetch("http://localhost:8095/orders");
        result =await result.json();
        setData(result)
    }
    return (
        <div>
           {data.map((item)=>
              <div className="checkout">
              <div className="header">
                <div className="header-block">
                  <span>CHECKOUT</span>
                </div>
              </div>
              <div className="item-details-container">
                <div className="item-1">
                  <div>
                     
                    <h3>Product Name:</h3><div className="desc"><h3>{item.name}</h3></div>
                    <h3>Product Quantity:</h3><div className="qty"><h3>{item.quantity}</h3></div>
                  </div>
                  <h3>Product Price:</h3><div className="price"><h3>{item.price}</h3></div>
                </div>
               </div>
               <h3>Total Price:</h3><div className="total"><h3>{item.totalPrice}</h3></div>
               <StripeButton price={item.totalPrice} /><br/><br/>

               <h1>Payment Successful</h1>
            </div>
           )}
        </div>
    )
}
export default PaymentMethod