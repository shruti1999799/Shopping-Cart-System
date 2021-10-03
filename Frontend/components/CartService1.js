import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'

function CartService1() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getData();
    }, [])
    

    async function getData(){
        let result =await fetch("http://localhost:8094/cart/");
        result =await result.json();
        setData(result)
    }
    async function deleteOperation(id){
        let result=await fetch("http://localhost:8094/delete/"+id,{
            method:'DELETE'
        });
        getData();
     }

//      async function search(username)
//   {
//     console.log(username)

//     let result =await fetch("http://localhost:8094/cart/"+username);
//     result=await result.json();
//     console.warn(result)
//     setData(result)
//   }  
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
    return (
       
        <div>
           
          
            <table class="table table-hover table-striped table-dark">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                    <th>Remove</th>
                </tr>
                </thead>
                {
                    data.map((item) =>
                    <tr>
                    <td style={{color:"black"}}>{item.name}</td>
                    <td style={{color:"black"}}>{item.price}</td>
                    <td style={{color:"black"}}>{item.quantity}</td>
                    <td style={{color:"black"}}>{item.totalPrice}</td>
                    {/* <Button as={Link} to={"/placeOrder"}>Buy Now</Button> */}
                    <td><Button style={{backgroundColor:'red',color:'white'}} onClick={() =>{const confirmBox=window.confirm("Do you really want to delete this?"); if (confirmBox === true){deleteOperation(item.id)}}}>Remove</Button></td>
                    
                </tr>
                     
                    )
                }
            </table>
            <h1>Grand Total:{data.reduce((total,item) => total+item.totalPrice,0)}</h1>
             
                {data.map((item)=>
                <form >
                <div  className="col-sm-6 offset-sm-3">
                    <h1>Place Your Order Here</h1>
                UserName:      <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} className="form-control" placeholder="username" /> <br />
                ProductName:  <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control" placeholder={item.name} /> <br />
                Price:        <input type="number" value={price} onChange={(e) =>setPrice(e.target.value)} className="form-control" placeholder={item.price} /> <br />
                Quantity:      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder={item.quantity} /> <br />
                Total Price:   <input type="text" value={totalPrice} onChange={(e) =>setTotalPrice(e.target.value)} className="form-control" placeholder={item.price*quantity} /> <br />

                Debit Number:  <input type="text" value={debitNo} onChange={(e) =>setDebitNo(e.target.value)} className="form-control" placeholder="Debit Card No" /><br />
            Delivery Address:  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Address" /><br />
                  </div>
                </form>
                )}
                
                    <button onClick={placeOrder} className="btn btn-primary"><button style={{backgroundColor:"none"}} onClick={()=>alert("Order Placed SuccessFully")}></button>Place Your Order</button><br/>

    
        </div>

       
    )
}
export default CartService1;
