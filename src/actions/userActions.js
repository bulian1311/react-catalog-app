import { magmerMailer } from './axios';
import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_PHONE,
  ADD_EMAIL,
  ADD_CITY,
  FETCH_USER,
  ADD_MESSAGE,
  MESSAGE_SUBMIT
} from './types';

export const addFirstname = (firstName, user) => dispatch => {
  const newUser = { ...user, firstName };

  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_FIRSTNAME, payload: newUser });
};

export const addLastname = (lastName, user) => dispatch => {
  const newUser = { ...user, lastName };
  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_LASTNAME, payload: newUser });
};

export const addPhone = (phone, user) => dispatch => {
  const newUser = { ...user, phone };
  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_PHONE, payload: newUser });
};

export const addEmail = (email, user) => dispatch => {
  const newUser = { ...user, email };
  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_EMAIL, payload: newUser });
};

export const addCity = (city, user) => dispatch => {
  const newUser = { ...user, city };
  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_CITY, payload: newUser });
};

export const addMessage = (message, user) => dispatch => {
  const newUser = { ...user, message };
  localStorage.setItem('magmer-user', JSON.stringify(newUser));
  dispatch({ type: ADD_MESSAGE, payload: newUser });
};

export const fetchUser = () => dispatch => {
  let user = JSON.parse(localStorage.getItem('magmer-user'));
  if (!user) {
    user = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      city: ''
    };
  }

  dispatch({ type: FETCH_USER, payload: user });
};

export const messageSubmit = user => async dispatch => {
  if (!user.phone || !user.firstName || !user.email || !user.message) {
    return;
  }
  let res = await magmerMailer.post('/message', {
    user
  });
  if (res.data.msg === 'success') {
    const newUser = { ...user, message: '' };
    localStorage.setItem('magmer-user', JSON.stringify(newUser));
    dispatch({ type: MESSAGE_SUBMIT, payload: newUser });
  }
};
