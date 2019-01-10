import axios from 'axios';

export const magmerApi = axios.create({
  baseURL: 'http://194275.simplecloud.ru:18917/'
});

export const magmerMailer = axios.create({
  baseURL: 'http://194275.simplecloud.ru:59528/'
});
