import axios from 'axios';
import { API_STATUS } from '@/api/api-status';
import { API_ROUTES } from '@/api/api-routes';
import { useRouter } from 'vue-router';
import router from '@/router';

const navraAxios = axios.create({
  baseURL: 'http://5.34.201.164:3000/api/',
  timeout: 10000,
});

// Add a request interceptor
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

// Add a response interceptor
navraAxios.interceptors.response.use(
  (response) => {
    // Handle successful responses
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
