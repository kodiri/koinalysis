import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation-link'> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/HistoricPrices'>Bitcoin Price Index</NavLink>
            <NavLink to='/NewsFeed'>News Feed</NavLink> 
            {/* <NavLink to='/NewPage'>NewPage</NavLink> */}
        </div>
    );
};

export default Navigation;