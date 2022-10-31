import axios from 'axios';

const api = axios.create({
  baseURL: 'https://conveccao.onrender.com/',
});

export default api;