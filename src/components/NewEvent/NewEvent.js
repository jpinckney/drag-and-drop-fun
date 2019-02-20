import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import './NewEvent.css'

class NewEvent extends Component {
  constructor(){
    super()
    this.state = {
      eventName:""
    }

    this.createEvent = this.createEvent.bind(this)
    this.checkForRedirect = this.checkForRedirect.bind(this)
  }

  componentDidMount(){
    this.checkForRedirect()
  }

  checkForRedirect(){
    if(!this.props.authenticated){
      this.props.history.push('/')
    }
  }

  createEvent(){
    axios.post('/api/createEvent', {eventName:this.state.eventName}).then((res)=>{
      console.log(res)
    })
  }

  render(){
    console.log(this.props)
    return(
      <div className="new-event-wrapper">
        <h2>Create Events Here</h2>
        <div>
          <p>Event Name</p>
          <input onChange={(e)=>this.setState({eventName:e.target.value})}/>
          <button onClick={this.createEvent}>Create</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {authenticated} = state

  return {
    authenticated
  }
}

export default connect(mapStateToProps)(NewEvent)
