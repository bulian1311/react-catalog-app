import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3 mr-3 ml-3">
        <div className="input-group-prepend">
          <span
            className="input-group-text text-white bg-primary"
            id="inputGroup-sizing-default"
          >
            <i className="fas fa-search fa-lg" />
          </span>
        </div>
        <input
          type="text"
          placeholder="Поиск..."
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    );
  }
}

export default Search;
