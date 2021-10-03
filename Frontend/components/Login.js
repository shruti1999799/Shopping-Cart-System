import React, { Component } from 'react'

export class Login extends Component {
   
    constructor()
    {
        super();
        this.state={
            username:"null",
            password:"null",
            login:false,
            store:null
        }
    }

    componentDidMount()
    {
        let store = JSON.parse(localStorage.getItem('login'));
        this.setState({store:store})
        if(store && store.login)
        {
            this.setState({login:true})
        }
        
    }
    login()
    {
        fetch('http://localhost:8098/api/signin',{
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        }).then((response) => {
            response.json().then((result)=>{
                console.warn("result",result);
                // localStorage.setItem('login',JSON.stringify({
                //     login:true,
                //     token:result.token
                // }))
                this.setState({login:true})
                alert("Login Successfull")
            })
        })
    }
    
    render() {
        return (
            
            <div>
                <h1>Login Page</h1>
                <input type="text" onChange={(event) => {this.setState({username:event.target.value})}} /><br />
                <input type="text" onChange={(event) => {this.setState({password:event.target.value})}} /><br />
                <button onClick={() => {this.login()}}> Login</button>
            </div>
            // :
            // <div>
                
            //     <h1>
            //         Welcome User
            //     </h1>
                
            // </div>
                    
           
        )
    }
}

export default Login;