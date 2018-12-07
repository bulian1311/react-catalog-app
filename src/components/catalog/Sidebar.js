import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Sidebar extends Component {
  renderTags = () => {
    const { tags } = this.props;
    return tags.map(tag => {
      return (
        <div key={tag._id} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id={tag._id}
            value={tag.title}
          />
          <label className="tag form-check-label" htmlFor={tag._id}>
            {tag.title}
          </label>
        </div>
      );
    });
  };

  renderProducers = () => {
    const { producers } = this.props;
    return producers.map(producer => {
      return (
        <div key={producer._id} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id={producer._id}
            value={producer.url}
          />
          <label className="form-check-label" htmlFor={producer._id}>
            {producer.url}
          </label>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="collapse text-light" id="navbarToggleExternalContent">
        <div className="bg-primary p-4">
          <h5 className="text-white h4">Поставщики:</h5>
          {this.props.producers ? this.renderProducers() : ''}
          <hr />
          <h5 className="text-white h4">Категории:</h5>
          {this.props.tags ? this.renderTags() : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags,
    producers: state.producers
  };
};

export default connect(mapStateToProps)(Sidebar);
