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
                    {producer.url}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  renderTags = () => {
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
              <b>Теги</b>
            </div>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse multi-collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <ul style={{ height: 350, overflow: 'auto' }} className="list-group">
            {this.props.tags.map(tag => {
              return (
                <li key={tag._id} className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={tag._id}
                    />
                    <label
                      className="custom-control-label tag"
                      htmlFor={tag._id}
                    >
                      {tag.title}
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
    const { tags, producers } = this.props;
    return (
      <div className="accordion mb-3" id="accordionExample">
        {tags ? this.renderTags() : 'loading'}
        {producers ? this.renderProducers() : 'loading'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tags: state.tags, producers: state.producers };
};

export default connect(mapStateToProps)(Sidebar);
