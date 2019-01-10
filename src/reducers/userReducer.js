import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_PHONE,
  ADD_EMAIL,
  ADD_CITY,
  ADD_MESSAGE,
  FETCH_USER,
  MESSAGE_SUBMIT
} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  message: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FIRSTNAME:
      return action.payload;

    case ADD_LASTNAME:
      return action.payload;

    case ADD_PHONE:
      return action.payload;

    case ADD_EMAIL:
      return action.payload;

    case ADD_CITY:
      return action.payload;

    case FETCH_USER:
      return action.payload;

    case ADD_MESSAGE:
      return action.payload;

    case MESSAGE_SUBMIT:
      return action.payload;

    default:
      return state;
  }
}
