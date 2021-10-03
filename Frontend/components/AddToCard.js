import React from 'react'
import {withRouter} from 'react-router-dom';
import {useState,useEffect} from 'react';

function AddToCard(props) {
    const [data,setData]=useState([])
    const [username,setUsername]=useState({
        username:""
    })
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")
    const [totalPrice,setTotalPrice]=useState("")
    console.warn("props",props.match.params.id)
    useEffect(async () => {
        let result = await fetch("http://localhost:8093/api/products/"+props.match.params.id)
        result= await result.json();
        setData(result)
        setName(data.name)
        setPrice(data.price)
      
    })
    async function createCart(){    
       
        let items={username,name,price,quantity,totalPrice}
        console.warn(items)

        let result = await fetch("http://localhost:8094/cart/create",{
            method:'POST',
            body:JSON.stringify(items),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result= await result.json()
       alert("Added to Cart");
        
    }
   
    return (
       
        <div>
            <h1>Add To Cart</h1>

            User Name:<input onChange={(e) =>setUsername(e.target.value)} type="text" /><br/>
            Product Name:<input onChange={(e) =>setName(e.target.value)}  type="text" defaultValue={data.name}/><br/>
            Product Price:<input onChange={(e) =>setPrice(e.target.value)}  type="text" defaultValue={data.price}/><br/>
            Product Quantity:<input onChange={(e) =>setQuantity(e.target.value)} type="number"/><br/>
            Total Amount:<input onChange={(e) =>setTotalPrice(e.target.value)} type="number" value={totalPrice} placeholder={price*quantity}/><br/>
            
            <button onClick={()=>{const confirmBox=window.confirm("Confirm?"); if (confirmBox === true){createCart()}}}>Add to Cart</button>
        </div>
    )
}
export default withRouter(AddToCard);
