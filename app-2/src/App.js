import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state={
        family: ["Susie", "Brian", "Claire", "Dad", "Mom"]
    }
  }


  render() {
    let famDisplay = this.state.family.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })

    return <div className="App">{famDisplay}</div>

    };
  }


export default App;
