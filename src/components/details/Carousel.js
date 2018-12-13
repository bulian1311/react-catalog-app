import React, { Component } from 'react';

export class Carousel extends Component {
  renderImages = () => {
    const height = 510;
    return this.props.images.map((image, i) => {
      if (i === 0) {
        return (
          <div key={image._id} className="carousel-item active">
            <img
              style={{
                minHeight: height,
                maxHeight: height
              }}
              className="d-block w-100"
              src={image.url}
              alt="Slide"
            />
          </div>
        );
      } else {
        return (
          <div key={image._id} className="carousel-item">
            <img
              style={{
                minHeight: height,
                maxHeight: height
              }}
              className="d-block w-100"
              src={image.url}
              alt="Slide"
            />
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">{this.renderImages()}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
