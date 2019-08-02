import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apigobarber.fvsystem.com.br',
});

export default api;
