import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Card from './components/Card'
import axios from 'axios'

import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

  constructor(){
    super();
    this.state = {
      
    }
  }

  componentDidMount(){
    console.log("Did Mount");
  }

  render() {
    return (
      <BrowserRouter>
        <main>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Create" component={Create} />
         <Route exact path="/Update" component={Update} />
        </main>
      </BrowserRouter>
    );
  }





}



export default App;
