import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Route, Redirect } from 'react-router';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/SignUp";
import './App.css';
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: ""
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    // // if(! this.state.username) {
    // //   this.getUser()
    // }
  }

  componentWillUpdate() {
    if(! this.state.username) {
      this.getUser()
      console.log("Updating user");
    }
    window.addEventListener("popstate", function(){
      console.log("history changed");
    })
  }

  updateUser (userObject) {
    this.setState(userObject)
    //console.log(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
    <div>
      <Nav />
      <Switch>
      {/* <Route exact path="/" username={this.state.username} component={Home} /> */}
      <Route
        exact path='/'
        component={() => <Home username={this.state.username} />}
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
      );
    }
}
  

export default App;



