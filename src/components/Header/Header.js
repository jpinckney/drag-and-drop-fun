import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      showLoginModal: false
    }
  }

  toggleLoginModal = () => {
    this.setState({showLoginModal:!this.state.showLoginModal})
  }

  render(){
    return(
      <div className="header_wrapper">
        <div>
          <h1>Events R Us</h1>
        </div>
        <div className="header_nav-wrapper">
          
          <p className="hover"><Link to="/new-event">New Event</Link></p>
          <p className="hover"><Link to="/events">Events</Link></p>
          <p className="hover"><Link to="/">Login</Link></p>
        </div>
      </div>
    )
  }
}

export default Header