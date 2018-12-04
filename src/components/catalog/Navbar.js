import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
        <form className="form-inline w-50">
          <input
            className="form-control mr-sm-2 w-100"
            type="text"
            placeholder="Поиск"
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Домой
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">
              О нас
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/contact"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
