
import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            active: "1",
            role: "1"
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    lasthandler = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    userhandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleSubmit = (event) => {
        // alert(
        //     `${this.state.firstName} ${this.state.lastName} ${this.state.userName}  Registered Successfuly !!`)
        console.log(this.state);
        // this.setState({
        //     firstName: "",
        //     lastName: "",
        //     userName: "",
        //     password: '',
        // })
        event.preventDefault()
        axios.post("http://localhost:3001/users", this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>User Registration</h1>
                    <label>FirstName :</label><input type="text" value={this.state.firstname} onChange={this.firsthandler} />
                    <label>LastName :</label> <input type="text" value={this.state.lastname} onChange={this.lasthandler} />
                    <label>UserName :</label> <input type="text" value={this.state.username} onChange={this.userhandler} />
                    <label>UserName :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} />

                    <button type="submit" value="Submit">Submit</button>
                </form>

            </div>
        )
    }




} export default RegisterForm;