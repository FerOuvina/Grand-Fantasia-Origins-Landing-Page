import axios from 'axios';
import { BACKEND_URL } from '../helpers/constants';

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Check for token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token if available
    }
    return config; // Proceed with the modified request
  },
  (error) => {
    /*  console.error("Request Interceptor Error:", error);  */
    return Promise.reject(error); // Forward the error to be handled later
  }
);

/* 
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      console.error("Unauthorized - Logging out");
      localStorage.removeItem("authToken"); // Clear invalid token
      // Redirect user to login page (optional)
      window.location.href = "/login";
    }
    return Promise.reject(error); // Forward the error
  }
);

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized - Redirecting to login');
      }
      return Promise.reject(error);
    }
  ); */
