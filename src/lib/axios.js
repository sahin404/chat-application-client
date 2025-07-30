import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://chat-application-server-1-jsm8.onrender.com',
  withCredentials: true, // Include credentials for CORS requests
});
