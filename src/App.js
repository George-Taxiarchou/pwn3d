import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/ThreadDisplay.jsx';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import Particles from 'react-particles-js';
const particlesOptions ={
  particles:{
    number:{
      value:60,
      density:{
        enable:false,
        value_area:500
      }
    },
    line_linked: {
      enable: true,
      color: "#00ff00"
    },
  }
}
class App extends Component {
  constructor(props) {
    super(props);
//Put your own Firebase Keys Here
  const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <div className="App">
      <div>You have been Pwn3d :(</div>
       <Particles className = 'particles'
          params={particlesOptions}
        />
      <h1>
      <ThreadDisplay database={this.database} />
      </h1>
      </div>
    );
  }
}

export default App;