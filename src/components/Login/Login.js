import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {handleAuthRes} from './../../ducks/actions'

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
    const {username, password} = this.state
    axios.post('/api/login', {username, password}).then((res)=>{
      this.props.handleAuthRes(res.data)
      this.setState({username:'', password:''})
      if(res.data.authenticated){
        this.props.history.push('/events')
      }
    })
  }

  render(){
    console.log(this.props)
    return(
      <div className="login-wrapper">
        <div style={{position:"relative"}}>
          <p>Username</p>
          <input value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
          <p>Password</p>
          <input value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {authenticated, user} = state

  return {
    authenticated,
    user
  }
}

export default connect(mapStateToProps, {handleAuthRes})(Login)