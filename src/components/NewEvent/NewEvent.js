import React, { Component } from 'react'

import './NewEvent.css'

class NewEvent extends Component {
  constructor(){
    super()
    this.state = {
      eventName:""
    }

    this.createEvent = this.createEvent.bind(this)
  }

  createEvent(){

  }

  render(){
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

export default NewEvent