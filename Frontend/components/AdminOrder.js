import { intersectionWith } from 'lodash';
import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminOrder() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getData();
    }, [])
    

    async function getData(){
        let result =await fetch("http://localhost:8095/orders");
        result =await result.json();
        setData(result)
    }
    async function deleteOperation(orderId){
        let result=await fetch("http://localhost:8095/delete/"+orderId,{
            method:'DELETE'
        });
        getData();
     }
     

    return (
        <div>
           <h1>Orders</h1>
            <table class="table table-hover table-striped table-dark">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <td>Total Price</td>
                    <th>Debit Number</th>
                    <th>Delivery Address</th>
                    <th>Payment Status</th>
                    <td>Cancle Order</td>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) =>
                    <tr>
                    <td style={{color:"white"}}>{item.username}</td>
                    <td style={{color:"white"}}>{item.name}</td>
                    <td style={{color:"white"}}>{item.price}</td>
                    <td style={{color:"white"}}>{item.quantity}</td>
                    <td style={{color:"white"}}>{item.totalPrice}</td>
                    <td style={{color:"white"}}>{item.debitNo}</td>
                    <td style={{color:"white"}}>{item.address}</td>
                    <td><Button style={{backgroundColor:"green"}}>Payment Done</Button></td>
                    <td><Button style={{backgroundColor:'red',color:'white'}} onClick={() =>{const confirmBox=window.confirm("Do you really want to delete this?"); if (confirmBox === true){deleteOperation(item.orderId)}}}>Cancle Order</Button></td>         
                </tr>        
                    )
                }
                </tbody>
            </table>
        </div>

       
    )
}
export default AdminOrder;
