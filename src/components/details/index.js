import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Carousel from './Carousel';

export class Details extends Component {
  renderSpecifications = data => {
    let specifications = [];

    for (let spec in data) {
      specifications.push(
        <tr key={spec + data._id}>
          <td>{spec}</td>
          <td>{data[spec]}</td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        <p>
          <b>Характеристики:</b>
        </p>

        <table className="table">
          <tbody>{specifications}</tbody>
        </table>
      </React.Fragment>
    );
  };

  render() {
    const { product } = this.props.location.state;
    return (
      <div className="detail">
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card mt-4">
                <Carousel images={product.images} />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="card bg-light mt-4"
                style={{
                  position: 'relative',
                  minHeight: 440,
                  maxHeight: 440
                }}
              >
                <div style={{ overflow: 'auto' }} className="card-body">
                  <br />
                  <h3 className="card-title">{product.title}</h3>
                  <hr />
                  <h4>
                    {product.price}
                    <i class="fas fa-ruble-sign ml-2 fa-sm" />
                  </h4>
                  <br />
                  <p className="card-text">{product.description}</p>
                  <br />
                  {product.specifications
                    ? this.renderSpecifications(product.specifications)
                    : ''}
                  <br />
                  <p>
                    <small>
                      <b>Источник: </b>
                      {product.url}
                    </small>
                  </p>
                </div>
              </div>
              <div className="btn btn-lg btn-outline-primary btn-block mt-4">
                <i className="fas fa-cart-arrow-down fa-lg mr-2" />
                <b>Добавить в Корзину</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
