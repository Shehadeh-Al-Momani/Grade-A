import React, { useState } from 'react'
import logo from './pics/logo.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [logErr, setlogErr] = useState('')


    const emailHandler = (e) => {
        setemail(e.target.value)
        setlogErr(false)
    }
    const passHandler = (e) => {
        setpassword(e.target.value);
        setlogErr(false)
    }

    const login = (email, password) => {
        axios.post(`http://localhost:5000/login`, { email, password })
            .then((response) => {
                if (response.data === "Invalid Email or password..") {
                    setlogErr(true)
                } else {
                    const token = response.data
                    localStorage.setItem('token',token)
                    history.push("/");
                }
            })
            .catch((err) => { throw err })

    }

    return (
        <div className="loginCont">
            <div className="login">
                <div className="login-logo">
                    <img src={logo} alt=""></img>
                    <p>Log In as student or Instructor</p>
                    <div className="l-border"></div>


export default LogIn

