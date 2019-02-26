import React from 'react';
import '../App.css';

export default function ethereumGraph() {
    return (
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
    )
}