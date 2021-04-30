import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import axios from 'axios';


class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false }
    }

    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false })
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false })
    }

    render() {
        return (
            <div className="root-container" >
                <Header />
                <div className="wrapper" >
                    <div className="form-wrapper">
                        <div className="form-tabs">
                            <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                                Login
                    </div>
                            <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                                Register
                    </div>
                        </div>

                        {this.state.isLoginOpen && <Login />}
                        {this.state.isRegisterOpen && <RegisterBox />}
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}
export default LoginRegister;




class RegisterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            active: "1",
            role: "1",
            errors: []
        }
    }
    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }))
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        });
    }


    onFirstnameChange(e) {
        this.setState({ firstname: e.target.value });
        this.clearValidationErr("firstname");
    }
    onLastnameChange(e) {
        this.setState({ lastname: e.target.value });
        this.clearValidationErr("lastname");
    }
    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        this.clearValidationErr("username");
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationErr("password");
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value });
        this.clearValidationErr("email");
    }
    // onActiveChange(e) {
    //     this.setState({ active: e.target.value });
    //     this.clearValidationErr("active");
    // }
    // onRoleChange(e) {
    //     this.setState({ role: e.target.value });
    //     this.clearValidationErr("role");
    // }


    submitRegister(e) {

        if (this.state.firstname == "") {
            this.showValidationErr("firstname", "Username cannot be empty");
        } if (this.state.lastname == "") {
            this.showValidationErr("lastname", "Lastname cannot be empty");
        } if (this.state.username == "") {
            this.showValidationErr("username", "Username cannot be empty");
        } if (this.state.password == "") {
            this.showValidationErr("password", "Password cannot be empty");
        } if (this.state.email == "") {
            this.showValidationErr("email", "Email cannot be empty");
        }
        axios.post("http://localhost:3001/users", this.state)
        console.log(this.state)
    }
    render() {

        let firstnameErr = null, lastnameErr = null, usernameErr = null, passwordErr = null, emailErr = null, activeErr = null, roleErr = null;
        for (let err of this.state.errors) {

            if (err.eln == "firstname") {
                firstnameErr = err.msg;
            } if (err.eln == "lastname") {
                lastnameErr = err.msg;
            } if (err.eln == "username") {
                usernameErr = err.msg;
            } if (err.eln == "passwordname") {
                passwordErr = err.msg;
            } if (err.eln == "email") {
                emailErr = err.msg;
            }
        }
        return (
            <div>

                <div className="box">

                    <div className="fullName" >
                        <label htmlFor="firstname">Firstname</label>
                        <input type="firstname" name="firstname" className="login-input" placeholder="Firstname" onChange={this.onFirstnameChange.bind(this)}></input>
                        <small className="danger-error">{firstnameErr ? firstnameErr : ""}</small>
                    </div>

                    <div className="fullName" >
                        <label htmlFor="Lastname">Lastname</label>
                        <input type="Lastname" name="lastname" className="login-input" placeholder="Lastname" onChange={this.onLastnameChange.bind(this)}></input>
                        <small className="danger-error">{lastnameErr ? lastnameErr : ""}</small>
                    </div>

                    <div className="fullName" >
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange.bind(this)}></input>
                        <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
                    </div>

                    <div className="password" >
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)}></input>
                        <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
                    </div>

                    <div className="email" >
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="login-input" placeholder="Email" onChange={this.onEmailChange.bind(this)}></input>
                        <small className="danger-error">{emailErr ? emailErr : ""}</small>
                    </div>



                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}