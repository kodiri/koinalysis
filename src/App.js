import React, { Component } from "react";
import "./App.css";
import NewsPrice from "./Sections/NewsPrice";
import LivePrice from "./Sections/LivePrice";
import BitcoinGraph from "./Sections/BitcoinGraph";
import EthereumGraph from "./Sections/EthereumGraph";
import XrpGraph from "./Sections/XrpGraph";
import EosGraph from "./Sections/EosGraph";
import LitecoinGraph from "./Sections/LitecoinGraph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsPrice />
        <h2>Koinalysis</h2>
        <LivePrice />
        <BitcoinGraph />
        <EthereumGraph />
        <XrpGraph />
        <EosGraph />
        <LitecoinGraph />
      </div>
    );
  }
}

export default App;
