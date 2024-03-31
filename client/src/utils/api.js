import axios from 'axios';

const api = axios.create({
  baseURL: 'backend-app-production-5541.up.railway.app/'
});

export default api;
