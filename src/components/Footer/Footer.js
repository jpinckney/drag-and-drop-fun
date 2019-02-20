import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div style={{width:'100%', height:"50px", background:"#333", color:"white"}}>
        I am a footer!
      </div>
    )
  }
}

export default Footer