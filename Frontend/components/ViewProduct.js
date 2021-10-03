import React,{useState,useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import '../style.css'
import { Button } from 'react-bootstrap';

const ViewProduct =() => {

    const [item,setItem]=useState({
        id:"",
        image:"",
        name:"",
        price:"",
        description:"",
        quantity:""
    });
    const {id} = useParams();
    useEffect(() => {
        loadItem();
    },[]);
    const loadItem = async () => {
        const res=await axios.get(`http://localhost:8093/api/products/${id}`);
        setItem(res.data);
        
    }


    
    return( 
    
      <html>
          <body>
          
              <div className="products" >
              <div className="card">
                <div>
                    <img className="product-image"
                    src={item.image}
                    alt={item.name}
                    />
                </div>
                <div>
                    <h3 className="product-name">{item.name}</h3>
                </div>
                <div className="product-price">₹{item.price}</div>
                <div className="product-description">{item.description}</div>
             
            </div>
                         
                         {/* <h4>Select Quantity:</h4><input type="number" value={item.quantity}></input><br /> */}
                         {/* <Button as={Link} to={`/view/${id}`} onClick={()=>alert("Added to cart")} variant="outline-success">Add to cart</Button> */}
                     </div>
                  
          </body>
      </html>
      
        
    )
}
export default ViewProduct