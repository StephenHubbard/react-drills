import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state={
        filterString: "",
        family: ["Susie", "Brian", "Claire", "Dad", "Mom"]        
    };
  }

handleChange(filter) {
  this.setState({ filterString: filter });
}

  render() {
      let famDisplay = this.state.family
        .filter((el, i) => {
          return el.includes(this.state.filterString);
        })
        .map((el, i) => {
          return <h2 key={i}>{el}</h2>
        })

  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {famDisplay}
    </div>
      
      );
    }
  }


export default App;
