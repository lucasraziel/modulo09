import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apigobarberweb.fvsystem.com.br',
});

export default api;
