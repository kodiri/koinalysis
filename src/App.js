import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-data">
            <span className="left">{key}</span>
            <span className="right">{this.state.cryptos[key].USD}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
