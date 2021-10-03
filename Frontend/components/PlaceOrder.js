import React, {useState} from 'react'

function PlaceOrder()
{
 
    const [username,setUsername]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")
    const [totalPrice,setTotalPrice]=useState("")
    const [debitNo,setDebitNo]=useState("")
    const [address,setAddress]=useState("")
 
    async function placeOrder(){
        let items={username,name,price,quantity,totalPrice,debitNo,address}
        console.warn(items)

        let result = await fetch("http://localhost:8095/order/create",{
            method:'POST',
            body:JSON.stringify(items),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json()
       alert("Order Placed Successfully");
        
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            
            <h1>Place Your Order</h1>
            <form>
            UserName:      <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} className="form-control" placeholder="username" /> <br />
            ProductName:  <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control" placeholder="product name" /> <br />
            Price:        <input type="number" value={price} onChange={(e) =>setPrice(e.target.value)} className="form-control" placeholder="price" /> <br />
            Quantity:      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder="name" /> <br />
            Total Price:   <input type="text" value={totalPrice} onChange={(e) =>setTotalPrice(e.target.value)} className="form-control" placeholder={price*quantity} /> <br />

            Debit Number:  <input type="text" value={debitNo} onChange={(e) =>setDebitNo(e.target.value)} className="form-control" placeholder="Debit Card No" /><br />
            Delivery Address:  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Address" /><br />
           </form>
            
            <button onClick={placeOrder}  className="btn btn-primary">Place Your Order</button>
          
        </div>
    )
}

export default PlaceOrder;