import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addFirstname,
  addLastname,
  addPhone,
  addEmail,
  addCity
} from '../../actions/userActions';

export class Form extends Component {
  render() {
    const { dispatch, user } = this.props;
    return (
      <div>
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group input-group">
              <input
                onChange={e => dispatch(addFirstname(e.target.value, user))}
                value={user.firstName}
                type="text"
                className="form-control"
                placeholder="Имя..."
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
                onChange={e => dispatch(addLastname(e.target.value, user))}
                value={user.lastName}
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
            onChange={e => dispatch(addPhone(e.target.value, user))}
            value={user.phone}
            type="text"
            className="form-control"
            placeholder="8(999)123-56-78"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-phone" />
            </span>
          </div>
        </div>

        <div className="form-group input-group">
          <input
            onChange={e => dispatch(addEmail(e.target.value, user))}
            value={user.email}
            type="email"
            className="form-control"
            placeholder="test@email.ru"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <br />
        <textarea class="form-control" placeholder="Сообщение..." rows="3" />
        <br />
        <div
          onClick=""
          className="btn btn-outline-success btn-lg btn-block mt-4"
        >
          <i class="far fa-envelope mr-2 fa-lg" />
          <b>Отправить</b>
        </div>
      </div>
    );
  }
}

const mapSteteToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapSteteToProps)(Form);