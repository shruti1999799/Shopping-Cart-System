import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logout extends Component {
    render() {
        return (
            <div>
                <h1>You have been logged out!</h1>
                <Link to="/adminLogin">Login Again</Link><br />
            </div>
        )
    }
}

export default Logout;
