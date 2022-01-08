import React, { Component } from 'react';
import axios from 'axios'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            email:'',
            password:''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('http://localhost:4000/app/register', registered)
            .then(response => console.log(response.data))
        
        // window.location = "./Home.js"
        this.setState({
            username:'',
            email:'',
            password:''
        })
    }

    render() { 
        return ( 
            <div className="modalContentRight">
            <form action="/" method="GET" className="modalForm" id="form" onSubmit={this.onSubmit}>
              <div className="shop-logo2">
              </div>
              <div className="logo2">
              <div className="vest2">Via Mario</div>
              </div>
              <div className="formHead">Get started with us today! Create your account by filling the information below...</div>
              
              <div className="formValidation">
                  <input type="text" className="modalInput" name="username" id="username" placeholder="Enter your username" onChange={this.changeUsername} value={this.state.username} />
              </div>
              {/* {nameErrors && <p>{nameErrors}</p>} */}
              <div className="formValidation">
                  <input type="email" className="modalInput" name="email" id="email" placeholder="Enter your Email" onChange={this.changeEmail} value={this.state.email} />
              </div>
              {/* {emailErrors && <p>{emailErrors}</p>} */}
              <div className="formValidation">
                  <input type="password" className="modalInput" name="password" id="password" placeholder="Enter your Password" onChange={this.changePassword} value={this.state.password} />
              </div>
              {/* {passwordErrors && <p>{passwordErrors}</p>} */}
              <input type="submit" className="modalInputBtn" value="Register" />
              <span className="modalInputLogin">Already have an account? Sign In <a href="#modal2">here</a></span>
          </form>
          </div>
        );
    }
}
 
export default RegisterForm;