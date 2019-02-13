import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="login-wrapper">
        <div style={{position:"relative"}}>
          <p onClick={this.props.toggleLoginModal} style={{position:"absolute", top:"-10px", left:"10px"}}>x</p>
          <p>Username</p>
          <input />
          <p>Password</p>
          <input />
          <button>Login</button>
        </div>
      </div>
    )
  }
}

export default Login