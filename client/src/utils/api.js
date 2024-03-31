import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uteach.up.railway.app/'
});

export default api;
