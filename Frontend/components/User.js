import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap';

function User() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getData();
    }, [])
    async function getData(){
        let result =await fetch("http://localhost:8097/api/test/allUsers");
        result =await result.json();
        setData(result)
    }
    async function deleteOperation(id){
        let result=await fetch("http://localhost:8097/api/test/delete/"+id,{
            method:'DELETE'
        });
        alert("User Deleted")
        getData();
     }
    return (
        <div>
           <h1>Customers</h1>
            <Table>
                <thead>
                <tr>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                </tr>
                </thead>
                {
                    data.map((item) =>
                    <tr>
                      <td>{item.fullName}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.dateOfBirth}</td>
                      <td>{item.gender}</td>
                      <td><span style={{backgroundColor:'red',color:'white'}} onClick={() => {const confirmBox=window.confirm("Do you really want to delete this?"); if (confirmBox === true){deleteOperation(item.id)}}}>Delete</span></td>

                    </tr>

                    )
                }
            </Table>
    
        </div>

       
    )
}
export default User;
