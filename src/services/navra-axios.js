import axios from 'axios';
import { API_STATUS } from '@/api/api-status';
import router from '@/router';

const navraAxios = axios.create({
  baseURL: 'http://5.34.201.164:3000/api/',
  timeout: 10000,
});

navraAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

navraAxios.interceptors.response.use(
  (response) => {
    if(response.config.url.endsWith('users/login') && response.status === API_STATUS.OK){
      localStorage.setItem('authToken', response.data.user.token);
    }
    return response;
  },
  (error) => {
    if(error.status === API_STATUS.UNAUTHORIZED){
      router.push('/enter');
    }
    return new Promise(()=>{});
  }
);

export default navraAxios;
