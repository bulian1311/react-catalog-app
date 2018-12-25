import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_PHONE,
  ADD_EMAIL,
  ADD_CITY
} from './types';

export const addFirstname = firstName => dispatch => {
  dispatch({ type: ADD_FIRSTNAME, payload: firstName });
};

export const addLastname = lastName => dispatch => {
  dispatch({ type: ADD_LASTNAME, payload: lastName });
};

export const addPhone = phone => dispatch => {
  dispatch({ type: ADD_PHONE, payload: phone });
};

export const addEmail = email => dispatch => {
  dispatch({ type: ADD_EMAIL, payload: email });
};

export const addCity = city => dispatch => {
  dispatch({ type: ADD_CITY, payload: city });
};
