import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
class Admin extends Component {
    render() {
        return (
            <div className="row">
                <h1>This is an admin page</h1>
                <Button style={{backgroundColor:"Yellow",color:"black"}} as={Link} to={"/addProducts"}><h2>Add Products</h2></Button><br /><br />
                <Button style={{backgroundColor:"Green",color:"black"}} as={Link} to={"/adminCrud"}><h2>Edit and delete Products</h2></Button><br /><br />
                <Button style={{backgroundColor:"yellow",color:"black"}} as={Link} to={"/users"}><h2>User Details</h2></Button><br /> <br/>
                <Button style={{backgroundColor:"Green",color:"black"}} as={Link} to={"adminOrder"}><h2>Order Details</h2></Button><br />
                <Link to="/logout">Logout</Link><br/>
            </div>
        )
    }
}

export default Admin
