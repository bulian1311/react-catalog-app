import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterClear } from '../../actions/filterActions';
import { sortClear } from '../../actions/sortActions';
import { loadMoreClear } from '../../actions/visibleActions';
import {
  searchHandler,
  searchByTitle,
  searchByDescription,
  searchQuery
} from '../../actions/searchActions';

export class Search extends Component {
  search = e => {
    const { dispatch, store, handler } = this.props;
    const query = e.target.value;

    dispatch(filterClear());
    dispatch(sortClear());
    dispatch(loadMoreClear());

    dispatch(searchQuery(query));

    if (handler === 'title') {
      dispatch(searchByTitle(query, store));
    } else if (handler === 'description') {
      dispatch(searchByDescription(query, store));
    }
  };

  render() {
    const { dispatch, query, handler } = this.props;

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
          value={query}
          type="text"
          placeholder="Поиск..."
          className="form-control w-50"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <select
          value={handler}
          className="custom-select"
          id="inputGroupSelect01"
          onChange={e => dispatch(searchHandler(e.target.value))}
        >
          <option value="title">Искать по названию</option>
          <option value="description">Искать по описанию</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { query, handler } = state.search;
  const { store } = state.products;
  return {
    store,
    handler,
    query
  };
};

export default connect(mapStateToProps)(Search);
