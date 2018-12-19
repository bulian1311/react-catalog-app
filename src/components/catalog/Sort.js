import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortAdd, sortBy } from '../../actions';

export class Sort extends Component {
  selectHandler = e => {
    const { dispatch, show } = this.props;
    const val = e.target.value;
    dispatch(sortAdd(val));
    dispatch(sortBy(val, show));
  };

  render() {
    const { show, sort } = this.props;
    return (
      <div className="mb-1">
        <div className="d-flex justify-content-between">
          <b>
            Товаров:{' '}
            <span className="text-primary">{show ? show.length : ''}</span>
          </b>
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              <i className="fas fa-sort-amount-down fa-lg ml-1 mr-1" />
              <b>Сортировать</b>
            </label>
            <select
              value={sort}
              onChange={this.selectHandler}
              className="custom-select custom-select-sm my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option value="none">Выбрать...</option>
              <option value="name">По алфавиту</option>
              <option value="price">По цене</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { show } = state.products;
  const { sort } = state;
  return { show, sort };
};

export default connect(mapStateToProps)(Sort);
