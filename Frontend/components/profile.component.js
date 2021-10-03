import React, { Component } from "react";
import { NavItem } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      list:[]
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    fetch("http://localhost:8097/api/test/allUsers").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({list:result})
            })
        })
   
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="row">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            Username:<strong>{currentUser.username}</strong>
          </h3>
        </header>
        {/* <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
  
        <div className="product">
                 {this.state.list.map(function(p,index){
                     return(
                      <p>
                         <b>Email</b>:{" "}
                         {currentUser.email}<br/>
                        <b>Full Name</b>:{" "}
                        {p.fullName} <br/>
                        <b>Gender</b>:{" "}
                        {p.gender}<br/>
                        <b>Date Of Birth</b>:{" "}
                        {p.dateOfBirth}<br/>
                        <b>Contact</b>:{" "}
                        {p.mobile}<br/>
                      </p>
                 )})}
             </div>
                     

      </div>: null}
     
      </div>
      
    );
  }
}
