import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Koinalysis</h3>
          <div className="Dashboard">
            <div className="Dashboard-child">
              <iframe title="Coinlib-iframe" className="Dashboard-iframe" src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=5&pref_coin_id=1508&graph=yes" width="100%" height="409" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0">
              </iframe>
            </div>
            <div className="Dashboard-bottom">Koinalysis powered by&nbsp;<a href="https://coinlib.io" className="Coinlib-link" target="_blank" rel="noopener noreferrer">Coinlib</a>
            </div>
          </div>
        </header>
        <div className="CurrencyWidget">
          <div className="CurrencyWidget-child">
            <iframe title="CoinlibWidget-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1508" width="100%" height="536" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="CurrencyWidget-iframe">
            </iframe>
          </div>
          <div className="CurrencyWidget-bottom">
            Koinalysis powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-link">
                  Coinlib
            </a>
          </div>
        </div>
        <div className="CurrencyWidget">
          <div className="CurrencyWidget-child">
            <iframe title="CoinlibWidget-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1508" width="100%" height="536" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="CurrencyWidget-iframe">
            </iframe>
          </div>
          <div className="CurrencyWidget-bottom">
            Koinalysis powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-link">
                  Coinlib
            </a>
          </div>
        </div>  
        <div className="CurrencyWidget">
          <div className="CurrencyWidget-child">
            <iframe title="CoinlibWidget-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=619&pref_coin_id=1508" width="100%" height="536" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="CurrencyWidget-iframe">
            </iframe>
          </div>
          <div className="CurrencyWidget-bottom">
            Koinalysis powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-link">
                  Coinlib
            </a>
          </div>
        </div>
        <div className="CurrencyWidget">
          <div className="CurrencyWidget-child">
            <iframe title="CoinlibWidget-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=585&pref_coin_id=1508" width="100%" height="536" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="CurrencyWidget-iframe">
            </iframe>
          </div>
          <div className="CurrencyWidget-bottom">
            Koinalysis powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-link">
                  Coinlib
            </a>
          </div>
        </div>
        <div className="CurrencyWidget">
          <div className="CurrencyWidget-child">
            <iframe title="CoinlibWidget-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=359&pref_coin_id=1508" width="100%" height="536" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="CurrencyWidget-iframe">
            </iframe>
          </div>
          <div className="CurrencyWidget-bottom">
            Koinalysis powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-link">
                  Coinlib
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
