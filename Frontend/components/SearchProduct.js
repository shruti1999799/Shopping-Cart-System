
import React from 'react'
import {useState} from 'react'
import {Table} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SearchProduct() {

    const [data,setData]=useState([])
async function search(category)
  {
    console.log(category)

    let result =await fetch("http://localhost:8093/"+category);
    result=await result.json();
    console.warn(result)
    setData(result)
  }  
    
    return (
        <div>
    
            <Button as={Link} to={"/search"}>Search By Category</Button> 
          
            <Table>
               
            {
                    data.map((item) =>
                    <tr>
                    <td><img style={{width:150}} src={item.image} /></td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                               <div>
                        
                               <input value={item.quantity} style={{width:70}} type="text" />
                        
                               </div>
                    </td>
                    <td><Button variant="outline-success" onClick={() => alert("Added to cart")}>Add to cart</Button></td>
                    {/* <td><button as={Link} to={"/addCart:id"} style={{backgroundColor:'lightblue'}}>Add to cart</button></td>
     */}
                    
                </tr>

                    )
                }
            </Table>

        </div>
    )
}
export default SearchProduct;
