import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Home from './components/Pages/App/index';
import HistoricPrices from './components/Pages/HistoricPrices/HistoricPrices';
import NewsFeed from './components/Pages/NewsFeed/NewsFeed';
// import NewPage from './components/Pages/NewPage/NewPage';
import Error from './components/Pages/PageNotFound/PageNotFound';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className='App'>
          <Navigation />
          <Switch> 
            <Route path='/' component={Home} exact />
            <Route path='/HistoricPrices' component={HistoricPrices}/>
            {/* <Route path='/NewPage' component={NewPage} /> */}
            <Route path='/NewsFeed' component={NewsFeed} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
