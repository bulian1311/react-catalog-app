import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class InfoBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home fa-lg mr-2" />
                  Домой
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="nav-link">
                  <i className="fas fa-th-list fa-lg mr-2" />
                  Каталог
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default InfoBar;
