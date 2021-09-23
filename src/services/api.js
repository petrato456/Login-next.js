import axios from "axios";
import { localStorageGetToken } from './localStorage'

const api = axios.create({
    baseURL:'http://localhost:3006/'
});

api.interceptors.request.use((req) => {
    const token = localStorageGetToken();
  
    req.headers.Authorization = `Bearer ${token}`;
  
    return req;
  });

export default api;