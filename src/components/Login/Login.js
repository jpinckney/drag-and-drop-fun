import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleLogin = () => {
    this.props.toggleLoginModal()
    this.props.toggleLog()
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
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login