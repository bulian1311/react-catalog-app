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
    const { dispatch, firstName, lastName, phone, email, city } = this.props;
    return (
      <form>
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group input-group">
              <input
                onChange={e => dispatch(addFirstname(e.target.value))}
                value={firstName}
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
                onChange={e => dispatch(addLastname(e.target.value))}
                value={lastName}
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
            onChange={e => dispatch(addPhone(e.target.value))}
            value={phone}
            type="text"
            className="form-control"
            placeholder="8(999)123-56-78"
            required
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-phone" />
            </span>
          </div>
        </div>

        <div className="form-group input-group">
          <input
            onChange={e => dispatch(addEmail(e.target.value))}
            value={email}
            type="email"
            className="form-control"
            placeholder="test@email.ru"
            required
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>

        <div className="form-group input-group">
          <input
            onChange={e => dispatch(addCity(e.target.value))}
            value={city}
            type="text"
            className="form-control"
            placeholder="Город..."
          />
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

const mapStateToProps = state => {
  const { firstName, lastName, phone, email, city } = state.user;

  return { firstName, lastName, phone, email, city };
};

export default connect(mapStateToProps)(Form);
