import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://magmer-api.herokuapp.com/'
});
