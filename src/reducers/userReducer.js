import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_PHONE,
  ADD_EMAIL,
  ADD_CITY
} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case ADD_LASTNAME:
      return { ...state, lastName: action.payload };

    case ADD_PHONE:
      return { ...state, phone: action.payload };

    case ADD_EMAIL:
      return { ...state, email: action.payload };

    case ADD_CITY:
      return { ...state, city: action.payload };

    default:
      return state;
  }
}
