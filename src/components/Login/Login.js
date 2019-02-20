import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      Password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {

  }

  render(){
    return(
      <div className="login-wrapper">
        <div style={{position:"relative"}}>
          <p>Username</p>
          <input onChange={(e)=>this.setState({username:e.target.value})} />
          <p>Password</p>
          <input onChange={(e)=>this.setState({password:e.target.value})}/>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login