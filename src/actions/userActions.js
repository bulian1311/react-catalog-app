import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_PHONE,
  ADD_EMAIL,
  ADD_CITY,
  FETCH_USER
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
