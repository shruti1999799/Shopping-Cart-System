import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Searching extends Component {
    constructor(props){
        super(props)
        this.state={
            category:"",
            products:[]
        }
    }
    changeHandler=(e) => {
        this.setState({
            category:e.target.value
        });
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log("Shruti")

        axios.get("http://localhost:8093/api"+"/"+this.state.category).then(response =>{
            console.log(response.data)
            this.setState({products:response.data});
        })
        .catch(err =>console.log(err))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} action="/">
                    <input type="text" name="Search by category" value={this.state.category}
                    onChange={this.changeHandler} />
                    <button as={Link} to={"/home"} type="submit"></button>
                </form>
            </div>
        )
    }
}

export default Searching;
