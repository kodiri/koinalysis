import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/">KOINALYSIS</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <HashRouter>
        <ul>
          <li><Link to="/bitcoingraph">Bitcoin</Link></li>
          <li><Link to="/ethereumgraph">Ethereum</Link></li>
          <li><Link to="/xrpgraph">XRP</Link></li>
          <li><Link to="/eosgraph">EOS</Link></li>
          <li><Link to="/litecoingraph">Litecoin</Link></li>
        </ul>
        </HashRouter>
      </div>
    </nav>
  </header>
)

export default toolbar