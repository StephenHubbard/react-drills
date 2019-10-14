import React, { Component } from "react";
import "./App.css";
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdnb.artstation.com/p/assets/images/images/003/638/701/large/yusif-alomeri-dota-emoticons-icon-circle.jpg?1475880618"} />
      </div>
    );
  }
}

export default App;
