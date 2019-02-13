import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Login from './../Login/Login';
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
          <h1>Events</h1>
        </div>
        <div className="header_nav-wrapper">
          
          <p className="hover"><Link to="/new-event">New Event</Link></p>
          <p className="hover"><Link to="/events">Events</Link></p>
          <p className="hover" onClick={this.toggleLoginModal}>Login</p>
        </div>
        { this.state.showLoginModal &&
          <Login toggleLoginModal={this.toggleLoginModal} toggleLog={this.props.toggleLog}/>
        }
      </div>
    )
  }
}

export default Header