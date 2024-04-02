import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uteach.up.railway.app/'
  // baseURL: 'http://localhost:5000/'
});

export default api;
