import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'

export default class admin extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn= true
        if(token== null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn=== false){
            return <Redirect to ="/"/>
        }
        return (
            <div>
                <h1>This is an admin page. Only authorised people can enter.</h1>
                <Link to="/logout">Logout</Link> 
            </div>
        )
    }
}
