import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./components/Bootstrap/Navboot";
// import Cardbody from "./components/Cardbody/Card1";
import Aboutus from "./components/Pages/Aboutus";
import {BrowserRouter as Router, Route} from 'react-router';



class App extends Component {
  render() {
    return (
      <wrapper>
        
        <div className="loginBtn">
          <a class="btn float-right">
            <button>SIGNIN/LOGIN</button>
          </a>
        </div> 

        <div className="App mt-3 p-5">
          <div className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <img src={logo} className="App-logo"/> */}
            <h2>Car Wash Service</h2>
          </div>
        </div>
        
        <div className="container">
        <Router>
        <div className="navbar p-1 mt-1">         
          <Bootstrap />
          <Route exact path="/aboutus" component={Aboutus} />
          </div>
        </Router>
        
       
       
        <div className="jumbotron">
          <h1>Your Project</h1>
          <p>
            Project Description
          </p>
        </div>
        <div className="card mt-3 p-5">
          <div className="card-header">
            <h3 className="card-title">Description details</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              Card Body
            </p>
          </div>
        </div>
        </div>
      </wrapper>
    );
  }
}

export default App;
