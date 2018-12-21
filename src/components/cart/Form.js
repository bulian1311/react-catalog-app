import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Имя..."
                required
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Фамилия..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-user-friends" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Телефон..."
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-phone" />
            </span>
          </div>
        </div>

        <div className="form-group input-group">
          <input type="email" className="form-control" placeholder="Email..." />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>

        <div className="form-group input-group">
          <input type="text" className="form-control" placeholder="Город..." />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-city" />
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
