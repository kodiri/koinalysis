import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  loadMyAxios = () => {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,ETH,EOS,BCH&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        this.setState({ cryptos: cryptos });
      })
  };

  componentDidMount() {
    this.loadMyAxios();

  }

  componentDidUpdate() {
    this.loadMyAxios();
  }

  render() {
    return (
      <div className="App">
        <h1 id="header">Welcome to Koinalysis!!!!</h1>
        <h1 id="header">Team App</h1>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-data">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat 
              value={this.state.cryptos[key].USD} 
              displayType={'text'} decimalPrecision={2} 
              thousandSeparator={true} prefix={'$'} />
            </span>
          </div>
        ))}
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
