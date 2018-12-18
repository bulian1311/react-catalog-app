import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
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

  renderCategories = () => {};

  renderCategories = () => {
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
            {this.props.categories.map(category => {
              return (
                <li key={category._id} className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={e =>
                        console.log(e.target.value, ' ', e.target.checked)
                      }
                      value={category._id}
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
            })}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    const { categories, producers } = this.props;
    return (
      <div className="accordion mb-3" id="accordionExample">
        {categories ? this.renderCategories() : 'loading'}
        {producers ? this.renderProducers() : 'loading'}
      </div>
    );
  }
}

const mapStateToProps = ({ categories, producers }) => {
  return {
    categories,
    producers
  };
};

export default connect(mapStateToProps)(Sidebar);
