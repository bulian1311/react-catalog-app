import React from 'react';
import { connect } from 'react-redux';
import {
  filterAdd,
  filterDelete,
  filterByCategory,
  searchClear,
  sortClear,
  loadMoreClear
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
    dispatch(loadMoreClear());

    if (e.target.checked) {
      dispatch(filterAdd(val));
      dispatch(filterByCategory(arr, store));
    } else {
      dispatch(filterDelete(val, filter));
      dispatch(filterByCategory(filter, store));
    }
  };

  renderCategories = () => {
    const { categories, store } = this.props;
    return (
      <div className="card">
        <div
          className="card-header"
          id="headingOne"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h5 className="mb-0">
            <span className="btn text-secondary">
              <i className="fas fa-tasks fa-lg mr-2" />
              <b>Категории</b>
            </span>
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

  renderProducers = () => {
    return (
      <div className="card collapsed">
        <div
          className="card-header"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          id="headingTwo"
        >
          <h5 className="mb-0">
            <span className="btn text-secondary">
              <i className="fas fa-tasks fa-lg mr-2" />
              <b>Поставщики</b>
            </span>
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
