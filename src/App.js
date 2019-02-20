import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios';
import {handleAuthRes} from './ducks/actions'

import NewEvent from './components/NewEvent/NewEvent.js';
import Events from './components/Events/Events.js';
import EventDetails from './components/EventDetails/EventDetails.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {

    }
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  componentDidMount(){
    this.isLoggedIn()
  }

  isLoggedIn(){
    axios.get('/api/isLoggedIn').then((res)=>{
      console.log(res.data)
      this.props.handleAuthRes(res.data)
      if(!res.data.authenticated){
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/events" component={Events}/>
          <Route path="/new-event" component={NewEvent} />
          <Route path="/events/:id" component={EventDetails}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {}
}

export default withRouter(connect(mapStateToProps, {handleAuthRes})(App));
