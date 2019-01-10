import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { cartSubmit, cartClear } from '../../actions/cartActions';
import { withAlert } from 'react-alert';

export class Total extends Component {
  buttonSubmitClick = () => {
    const { dispatch, user, cart, alert } = this.props;
    dispatch(cartSubmit(cart, user));
    if (!user.phone || !user.firstName || !user.email) {
      alert.error('Заполните поля.');
      return;
    }
    alert.info('Заказ отправлен на обработку.');
  };

  render() {
    const { cart, dispatch, alert } = this.props;
    return (
      <div className="card mt-4 bg-light">
        <div className="card-body">
          <h3 className="card-title">Общая стоимость:</h3>
          <h2>
            {cart.totalPrice}
            <i className="fas fa-ruble-sign ml-2 fa-sm" />
          </h2>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Form />
          <div className="">
            <div
              onClick={this.buttonSubmitClick}
              className="btn btn-outline-success btn-lg btn-block mt-4"
            >
              <b>
                <i className="fas fa-money-bill fa-lg mr-2" />
                Оформить заказ
              </b>
            </div>
            <div
              onClick={() => {
                dispatch(cartClear());
                alert.success('Корзина очищена.');
              }}
              className="btn btn-outline-danger btn-sm btn-block mt-4"
            >
              <b>
                <i className="fas fa-trash-alt fa-lg mr-2" />
                Очистить корзину
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cart, user } = state;
  return { cart, user };
};

export default connect(mapStateToProps)(withAlert(Total));
