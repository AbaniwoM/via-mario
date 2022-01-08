import React, { useState } from 'react';
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios.post('http://localhost:4000/app/auth')
            .then(response => console.log(response.data))
        
        window.location = "./Home.js"
        this.setState({
            email: email,
            password: password
        })
    };

    
    return (
        <div className="modalContentRight">
                        <form className="modalForm" id="form">
                            <div className="shop-logo3">
                            </div>
                            <div className="logo2">
                            <div className="vest2">Via Mario</div>
                            </div>
                            <div className="formHead">Get started with us today! Sign in by filling your correct details below...</div>
                            <div className="formValidation">
                                <input type="email" className="modalInput" id="email" name="email" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value);}} />
                                <p>Error Message</p>
                            </div>
                            <div className="formValidation">
                                <input type="password" className="modalInput" id="password" name="password" placeholder="Enter your Password" onChange={(e) => {setPassword(e.target.value);}} />
                                <p>Error Message</p>
                            </div>
                            <input type="submit" className="modalInputBtn" value="Sign In" onClick={login} />
                            <span className="modalInputLogin2">Don't have an account? Register <a href="#modal">here</a></span>
                        </form>
        </div>
    )
}

export default Login
