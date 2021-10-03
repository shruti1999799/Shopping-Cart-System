import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function AdminCrud() {
    const [data,setData]=useState([]);
   
    async function deleteOperation(id){
       let result=await fetch("http://localhost:8093/api/delete/"+id,{
           method:'DELETE'
       });
       alert("Product Deleted")
       search();
    }

    async function search(category)
    {
    console.log(category)

    let result =await fetch("http://localhost:8093/api/"+category);
    result=await result.json();
    console.warn(result)
    setData(result)
  }  

    return (
        <div>
             
            <h1>Manage Products</h1><br />
            <Button value="electronics" onClick={(e)=>search(e.target.value)}>Electronics</Button>
            <Button value="clothing" onClick={(e)=>search(e.target.value)}>Clothing</Button>
            <Button value="jwellery" onClick={(e)=>search(e.target.value)}>Jwellery</Button>
            <Button value="furniture" onClick={(e)=>search(e.target.value)}>Furniture</Button>
            <Button value="beauty" onClick={(e)=>search(e.target.value)}>Beauty</Button>
            <Button value="kitchen" onClick={(e)=>search(e.target.value)}>Kitchen</Button>
            <Button value="baby" onClick={(e)=>search(e.target.value)}>Babies Products</Button>
            <Button value="malesshoes" onClick={(e)=>search(e.target.value)}>Males Shoes</Button>
            <Table style={{border:'solid 1px black'}}>
                <tr style={{border:'solid 1px black'}}>
                   
                    <th width="20%" style={{border:'solid 1px grey'}}>Name</th>
                    <th style={{border:'solid 1px grey'}}>Category</th>
                    <th style={{border:'solid 1px grey'}}>Price</th>
                    <th style={{border:'solid 1px grey'}}>Edit</th>
                    <th style={{border:'solid 1px grey'}}>Delete</th>
                </tr>
                {
                    data.map((item) =>
                    <tr style={{border:'solid 1px grey'}}>
                  
                    <td style={{border:'solid 1px grey'}}>{item.name}</td>
                    <td style={{border:'solid 1px grey'}}>{item.category}</td>
                    <td style={{border:'solid 1px grey'}}>{item.price}</td>
                    <td style={{border:'solid 1px grey'}}><Link to={"/updateProduct/"+item.id} style={{backgroundColor:"green",color:"white"}}>Edit</Link></td>
                    <td style={{border:'solid 1px grey'}}><Button  style={{backgroundColor:'red',color:'white'}} onClick={() =>{const confirmBox=window.confirm("Do you really want to delete this?"); if (confirmBox === true){deleteOperation(item.id)}}}>Delete</Button></td>
                    
                    
                </tr>
                    )
                }
            </Table>
        </div>
    )
}
export default AdminCrud;
