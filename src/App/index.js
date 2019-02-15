import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import axios from 'axios';
import PriceBox from './PriceBox';
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
      <AppLayout>
        <AppBar />
        <div className="Background">
        <PriceBox>
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
        </PriceBox>
          </div>
      </AppLayout >
    );
  }
}

export default App;
