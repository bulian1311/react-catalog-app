import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../../actions';

export class Item extends Component {
  render() {
    const { item, dispatch, cart } = this.props;

    return (
      <div className="card mt-4 bg-light">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <Link
                to={{ pathname: '/details', state: { product: item.product } }}
              >
                <h3 className="card-title">{item.product.title}</h3>
              </Link>
              <span>
                Цена:
                <b className="ml-1 text-primary">
                  {item.product.price}
                  <i className="fas fa-ruble-sign ml-1 fa-sm" />
                </b>
              </span>
              <span className="ml-5">
                Количество:
                <b className="ml-1 text-primary">{item.count}</b>
              </span>
            </div>
            <div>
              <div
                onClick={() => dispatch(deleteFromCart(item.product, cart))}
                className="btn btn-outline-danger btn-sm btn-block"
              >
                <i className="fas fa-minus mr-2" />
                <b>Удалить</b>
              </div>
              <div
                onClick={() => dispatch(addToCart(item.product, cart))}
                className="btn btn-outline-primary btn-sm btn-block"
              >
                <i className="fas fa-plus mr-1" />
                <b>Добавить</b>
              </div>
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

export default connect(mapStateToProps)(Item);
