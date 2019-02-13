import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import NewEvent from './components/NewEvent/NewEvent.js';
import Events from './components/Events/Events.js';
import EventDetails from './components/EventDetails/EventDetails.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }

  toggleLog = () => {
    console.log(this.state.loggedIn)
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <div className="App">
        <Header toggleLog={this.toggleLog}/>
        <Switch>
          { this.state.loggedIn &&
            <div>
              <Route path="/" exact component={Events}/>
              <Route path="/new-event" exact component={NewEvent} />
              <Route path="/events/:id" component={EventDetails}/>
            </div>
          }
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
