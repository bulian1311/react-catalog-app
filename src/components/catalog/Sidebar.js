import React from 'react';
import { connect } from 'react-redux';
import {
  filterAdd,
  filterDelete,
  filterBy,
  searchClear,
  sortClear
} from '../../actions';

class Sidebar extends React.Component {
  isChecked = (val, arr) => {
    return arr.find(el => {
      return el === val;
    });
  };

  handleChange = e => {
    const { dispatch, filter, store } = this.props;
    const val = e.target.value;
    let arr = filter.slice();
    arr.push(val);

    dispatch(searchClear());
    dispatch(sortClear());

    if (e.target.checked) {
      dispatch(filterAdd(val));
      dispatch(filterBy(arr, store));
    } else {
      dispatch(filterDelete(val, filter));
      dispatch(filterBy(filter, store));
    }
  };

  renderProducers = () => {
    return (
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <div
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-tasks fa-lg mr-2" />
              <b>Поставщики</b>
            </div>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse multi-collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            {this.props.producers.map(producer => {
              return (
                <div
                  key={producer._id}
                  className="custom-control custom-checkbox"
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={producer._id}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={producer._id}
                  >
                    {producer.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  renderCategories = () => {
    const { categories, store } = this.props;
    return (
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <div
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fas fa-tasks fa-lg mr-2" />
              <b>Категории</b>
            </div>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse multi-collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <ul
            style={{ maxHeight: 450, overflow: 'auto' }}
            className="list-group"
          >
            {store.length > 0
              ? categories.map(category => {
                  return (
                    <li key={category._id} className="list-group-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          onChange={this.handleChange}
                          value={category._id}
                          checked={
                            this.isChecked(category._id, this.props.filter)
                              ? true
                              : false
                          }
                          type="checkbox"
                          className="custom-control-input"
                          id={category._id}
                        />
                        <label
                          className="custom-control-label category"
                          htmlFor={category._id}
                        >
                          {category.title}
                        </label>
                      </div>
                    </li>
                  );
                })
              : ''}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="accordion mb-3" id="accordionExample">
        {this.renderCategories()}
        {this.renderProducers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories, producers, filter } = state;
  const { store } = state.products;

  return {
    categories,
    producers,
    filter,
    store
  };
};

export default connect(mapStateToProps)(Sidebar);
