import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Filter extends Component {
  render() {
    const { show } = this.props;
    return (
      <div className="mb-1">
        <div className="d-flex justify-content-between">
          <b>
            Всего товаров:{' '}
            <span className="text-primary">{show ? show.length : ''}</span>
          </b>
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              <i className="fas fa-sort-amount-down fa-lg ml-1 mr-1" />
              <b>Сортировать</b>
            </label>
            <select
              className="custom-select custom-select-sm my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option defaultValue>Выбрать...</option>

              <option value="1">По цене</option>
              <option value="2">По алфавиту</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { show: state.products.show };
};

export default connect(mapStateToProps)(Filter);
