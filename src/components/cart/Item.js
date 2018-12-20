import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div class="card mt-4 bg-light">
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h3 class="card-title">Special title treatment</h3>
              <span>
                Цена:
                <b class="ml-1 text-primary">
                  123000
                  <i class="fas fa-ruble-sign ml-1 fa-sm" />
                </b>
              </span>
              <span className="ml-5">
                Количество:
                <b className="text-primary"> 1</b>
              </span>
            </div>
            <div>
              <div class="btn btn-outline-danger btn-sm btn-block">
                <i class="fas fa-minus mr-2" />
                <b>Удалить</b>
              </div>
              <div class="btn btn-outline-primary btn-sm btn-block">
                <i class="fas fa-plus mr-1" />
                <b>Добавить</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
