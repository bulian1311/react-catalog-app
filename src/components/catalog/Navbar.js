import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-text">
            <b className="text-secondary">
              <i className="fas fa-mobile-alt fa-lg mr-2" />
              +7(915)275-44-55
            </b>
          </span>
          <span className="navbar-text text-secondary">
            <b>
              <a className="text-secondary" href="mailto:info@magmer.ru">
                <i className="fas fa-envelope fa-lg ml-4 mr-2" />
                info@magmer.ru
              </a>
            </b>
          </span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home fa-lg mr-2" />
                Домой
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
