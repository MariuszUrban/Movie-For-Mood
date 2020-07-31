import React, { Component } from 'react'
import '../sass/components/_signIn.scss'


export default class SignIn extends Component {
    render() {
        return (
            <div className='loginForm'>
                <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                    <form className="box">
                                            <h1>Login</h1>
                                            <p className="muted"> Please enter your login and password!</p> 
                                            <input type="text" name="" placeholder="Username" /> 
                                            <input type="password" name="" placeholder="Password" /> 
                                            <a className="forgot-text-muted" href="#">Forgot password?</a> 
                                            <input type="submit" name="" value="Login" href="#"/>
                                    </form>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
