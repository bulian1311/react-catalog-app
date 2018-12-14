import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  searchHandler,
  searchByTitle,
  searchByDescription
} from '../../actions';

export class Search extends Component {
  search = e => {
    const { dispatch, store, handler } = this.props;
    const query = e.target.value;

    if (handler === 'title') {
      dispatch(searchByTitle(query, store));
    } else if (handler === 'description') {
      dispatch(searchByDescription(query, store));
    }
  };

  render() {
    const { dispatch } = this.props;

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
          onChange={this.search}
          type="text"
          placeholder="Поиск..."
          className="form-control w-50"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={e => dispatch(searchHandler(e.target.value))}
        >
          <option defaultValue value="title">
            Искать по названию
          </option>
          <option value="description">Искать по описанию</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { store: state.products.store, handler: state.search.handler };
};

export default connect(mapStateToProps)(Search);
