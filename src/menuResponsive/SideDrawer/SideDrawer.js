import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <HashRouter>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/bitcoingraph">Bitcoin</Link></li>
          <li><Link to="/ethereumgraph">Ethereum</Link></li>
          <li><Link to="/xrpgraph">XRP</Link></li>
          <li><Link to="/eosgraph">EOS</Link></li>
          <li><Link to="/litecoingraph">Litecoin</Link></li>
        </ul>
      </HashRouter>
    </nav>
  )
}

export default sideDrawer