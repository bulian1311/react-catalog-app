import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <div class="form-row">
          <div class="col-md-6">
            <div className="form-group input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Имя..."
                required
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user" />
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div className="form-group input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Фамилия..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user-friends" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group input-group">
          <input type="text" class="form-control" placeholder="Телефон..." />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-phone" />
            </span>
          </div>
        </div>

        <div class="form-group input-group">
          <input type="email" class="form-control" placeholder="Email..." />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-envelope" />
            </span>
          </div>
        </div>

        <div class="form-group input-group">
          <input type="text" class="form-control" placeholder="Город..." />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-city" />
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
