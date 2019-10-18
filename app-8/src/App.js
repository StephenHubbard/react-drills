import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.opendota.com/api/matches/5073977969").then(response => {
      this.setState({
        value: response.data
      });
      console.log(this.state.value)
    });
  }

  render() {
    // let obj1 = Object.assign(obj1,this.state.value.picks_bans[0])
    const { picks_bans } = this.state.value
    console.log(typeof picks_bans);

    return (
      <div className="App">
        {this.state.value ?
          <div>
            <h1>Match ID: {this.state.value.match_id}</h1>
            <h1>Dire Score: {this.state.value.dire_score}</h1>
            <h1>Blank: {this.state.value.picks_bans[0].hero_id}</h1>
            <h1>Blank: {this.state.value.skill}</h1>
            <img src="http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=5419564" />
          </div>
          : null}
      </div>
    );
  }
}

export default App;