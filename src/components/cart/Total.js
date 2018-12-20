import React, { Component } from 'react';
import Form from './Form';

export class Total extends Component {
  render() {
    return (
      <div class="card mt-4 bg-light">
        <div class="card-body">
          <h3 class="card-title">Общая стоимость:</h3>
          <h2>
            123000
            <i class="fas fa-ruble-sign ml-2 fa-sm" />
          </h2>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Form />
          <div className="">
            <div class="btn btn-outline-success btn-lg btn-block mt-4">
              <b>
                <i class="fas fa-money-bill fa-lg mr-2" />
                Оформить заказ
              </b>
            </div>
            <div class="btn btn-outline-danger btn-sm btn-block mt-4">
              <b>
                <i class="fas fa-trash-alt fa-lg mr-2" />
                Очистить корзину
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
