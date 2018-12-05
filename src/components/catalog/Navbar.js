import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <button
          className="btn btn-outline-light mr-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Фильтр
        </button>
        <form className="form-inline w-75">
          <input
            className="form-control mr-sm-2 w-100"
            type="text"
            placeholder="Поиск"
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link exact className="nav-link" to="/">
              Домой
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
