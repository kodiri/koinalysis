import React from 'react';
import '../App.css';

export default function livePrice() {
    return (
        <header className="App-header">
          <div className="Dashboard">
            <div className="Dashboard-child">
              <iframe title="Coinlib-iframe" className="Dashboard-iframe" src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=5&pref_coin_id=1508&graph=yes" width="100%" height="409" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0">
              </iframe>
            </div>
            <div className="Dashboard-bottom">Koinalysis powered by&nbsp;<a href="https://coinlib.io" className="Coinlib-link" target="_blank" rel="noopener noreferrer">Coinlib</a>
            </div>
          </div>
        </header>
    )
}