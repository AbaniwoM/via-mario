import React, { useState } from 'react';
import Axios from "axios";

const Register = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:4000/user/signup", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="modalContentRight">
                          <form action="/" method="GET" className="modalForm" id="form">
                            <div className="shop-logo2">
                            </div>
                            <div className="logo2">
                            <div className="vest2">Via Mario</div>
                            </div>
                            <div className="formHead">Get started with us today! Create your account by filling the information below...</div>
                            
                            <div className="formValidation">
                                <input type="text" className="modalInput" name="username" id="username" placeholder="Enter your username" onChange={(e) => {setUsernameReg(e.target.value);}}  />
                            </div>
                            {/* {nameErrors && <p>{nameErrors}</p>} */}
                            <div className="formValidation">
                                <input type="email" className="modalInput" name="email" id="email" placeholder="Enter your Email" onChange={(e) => {setEmailReg(e.target.value);}}/>
                            </div>
                            {/* {emailErrors && <p>{emailErrors}</p>} */}
                            <div className="formValidation">
                                <input type="password" className="modalInput" name="password" id="password" placeholder="Enter your Password" onChange={(e) => {setPasswordReg(e.target.value);}}/>
                            </div>
                            {/* {passwordErrors && <p>{passwordErrors}</p>} */}
                            <input type="submit" className="modalInputBtn" value="Register" onClick={register} />
                            <span className="modalInputLogin">Already have an account? Sign In <a href="#modal2">here</a></span>
                        </form>
            </div>
    )
}

export default Register
