import React, {useContext, useState} from 'react';
import '../index.css'
import useInput from "../hooks/useInput.js";
import {mockUsers} from "../mockUsers.js";
// import {useAuth} from "../hooks/useAuth.js";

const LoginPage = () => {
    const email = useInput()
    const password = useInput()
    // const isAuth = useAuth()

    function mockLogin() {
        if (email.value === undefined || password.value== undefined || email.value === '' || password.value === '' ){
            alert("Поля пустые")
        } else {

        }
    }


    return (
        <div className="posts__login">
            <h1 className="posts__login_header">Login</h1>
            <input {...email} type="text" placeholder="your@email.com" />
            <input {...password} type="text" placeholder="your password" required/>
            <button type="submit" onClick={mockLogin}>Login</button>
        </div>
    );
};

export default LoginPage;