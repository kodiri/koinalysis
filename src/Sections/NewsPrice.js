import React from 'react';
import '../App.css';

export default function NewsPrice() {
    return (
        <div className="Coinlib-tracker">
          <div className="Coinlib-tracker-child">
            <iframe title="Coinlib-tracker-title" className="Coinlib-tracker-iframe" src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1508&invert_hover=no" width="100%" height="36" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0">
            </iframe></div>
          <div className="Coinlib-tracker-bottom">
            powered by&nbsp;
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="Coinlib-tracker-link">
                      Coinlib
            </a>
          </div>
        </div>
    )
}