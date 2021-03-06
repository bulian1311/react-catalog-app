import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { withAlert } from 'react-alert';

class ProductItem extends React.Component {
  render() {
    const { dispatch, product, cart, alert } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 product-item">
        <div className="card h-100">
          <Link to={{ pathname: '/details', state: { product } }}>
            <img
              style={{ height: 150, objectFit: 'cover' }}
              className="card-img-top mh-50"
              src={product.images[0].url}
              alt=""
            />
          </Link>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={{ pathname: '/details', state: { product } }}>
                {product.title}
              </Link>
            </h5>
            <h5 className="">
              {product.price}
              <i className="fas fa-ruble-sign ml-2 fa-sm" />
            </h5>
            <div
              onClick={() => {
                dispatch(addToCart(product, cart));
                alert.success('Товар добавлен в корзину.');
              }}
              className="btn btn-outline-primary btn-sm mt-auto"
            >
              <i className="fas fa-cart-arrow-down fa-lg mr-2" />
              <b>В корзину</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(withAlert(ProductItem));
