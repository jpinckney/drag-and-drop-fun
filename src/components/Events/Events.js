import React, { Component } from 'react'

import './Events.css'

class Events extends Component {
  constructor(){
    super()
    this.state = {
      events: [
        {
          name: "Grand Opening"
        },
        {
          name: "Job Fair"
        },
        {
          name: "Hunter Luker's B-Day"
        },
      ]
    }
    this.buildEventJSX = this.buildEventJSX.bind(this)
  }

  buildEventJSX(event){
    return(
      <div className="events_event-wrapper">
        <p>{event.name}</p>
      </div>
    )
  }

  render(){
    let events = this.state.events.map(this.buildEventJSX)
    return(
      <div>
        {events}
      </div>
    )
  }
}

export default Events