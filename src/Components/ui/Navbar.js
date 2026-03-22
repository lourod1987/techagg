import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/TechAgg_Logo_v3.png'

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
        <a href="https://luisdev.netlify.app/" title="Back to Portfolio"><button id="backtohome">Back to Portfolio</button></a>
          <img src={logo} alt="site logo - green lightning symbol" className="nav-logo"/>
          <Link to="/" className="site-name">
            <h1>TechAgg</h1>
          </Link>
          <Link to="/search" className="search-link">Search</Link>
          <Link to="/userinfo" className="link">User Info</Link>
        </nav>
      </header>
    );
  }
}