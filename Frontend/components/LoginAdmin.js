import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class LoginAdmin extends React.Component{

    constructor(){
        super();
        this.state={
            err: ''
        };
    }

    login(e){

        e.preventDefault();
        var username=e.target.elements.username.value;
        var password=e.target.elements.password.value;
        if(username === 'abc' && password === '123'){
             
        }else{
            this.setState({
                err:'Invalid'
            });
        }
    }
    render(){
        return(
            <div>
            {this.state.err != '' ? this.state.err : ''}
                <h3>Admin Login</h3>
                <form method="post" onSubmit={this.login.bind(this)}>
                      Username <input type="text" name="username"/>
                      <br />
                      Password<input type="password" name="password" />
                      <br />
                      <Button as={Link} to={"/admin"}>Login</Button>
                </form>

            </div>
        )
    }
}
export default LoginAdmin