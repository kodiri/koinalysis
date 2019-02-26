import React, { Component } from "react";
import { HashRouter, Route } from 'react-router-dom';
import "./App.css";
import Toolbar from "./menuResponsive/Toolbar/Toolbar";
import SideDrawer from "./menuResponsive/SideDrawer/SideDrawer";
import Backdrop from "./menuResponsive/Backdrop/Backdrop"
import NewsPrice from "./Sections/NewsPrice";
import LivePrice from "./Sections/LivePrice";
import BitcoinGraph from "./Sections/BitcoinGraph";
import EthereumGraph from "./Sections/EthereumGraph";
import XrpGraph from "./Sections/XrpGraph";
import EosGraph from "./Sections/EosGraph";
import LitecoinGraph from "./Sections/LitecoinGraph";

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <HashRouter>
          <div ClassName="AppBody">
            <NewsPrice />
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <Route exact path='/' component={LivePrice} />
            <Route exact path='/bitcoingraph' component={BitcoinGraph} />
            <Route exact path='/ethereumgraph' component={EthereumGraph} />
            <Route exact path='/xrpgraph' component={XrpGraph} />
            <Route exact path='/eosgraph' component={EosGraph} />
            <Route exact path='/litecoingraph' component={LitecoinGraph} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
