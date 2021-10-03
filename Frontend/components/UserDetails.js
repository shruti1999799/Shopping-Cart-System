import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function UserDetails() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getData();
    }, [])
    async function getData(){
        let result =await fetch("http://localhost:8098/api/test/allUsers");
        result =await result.json();
        setData(result)
    }
    async function deleteOperation(id){
        let result=await fetch("http://localhost:8098/api/test/delete/"+id,{
            method:'DELETE'
        });
        alert("User Deleted")
        getData();
     }
    return (
        <div>
           <h1>Customers</h1>
            <Table style={{border:'solid 1px black'}}>
                <thead style={{border:'solid 1px black'}}>
                <tr style={{border:'solid 1px black'}}>
                    <th style={{border:'solid 1px black'}}>UserName</th>
                    <th style={{border:'solid 1px black'}}>Email</th>
                    <th style={{border:'solid 1px black'}}>Delete User</th>

                </tr>
                </thead>
                {
                    data.map((item) =>
                    <tr style={{border:'solid 1px black'}}>
                      <td style={{border:'solid 1px black'}}>{item.username}</td>
                      <td style={{border:'solid 1px black'}}>{item.email}</td>
                      <td style={{border:'solid 1px black'}}><Button style={{backgroundColor:'red',color:'white'}} onClick={() => deleteOperation(item.id)}>Delete</Button></td>
                    </tr>


                    )
                }
            </Table>
            <Button as={Link} to={"/userDetails"}>View Details</Button>
    
        </div>

       
    )
}
export default UserDetails;
