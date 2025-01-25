import { axiosInstance } from '../api';

export const postRegister = async ({ username, email, password }) => {
  try {
    const response = await axiosInstance.post('/auth/register', {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getVerify = async (token) => {
  try {
    const response = await axiosInstance.get('/auth/verify', {
      params: { token }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Verification failed');
  }
};

export const postLogin = async ({ username, password }) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (authToken) => {
  try {
    const response = await axiosInstance.get('/user', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching user:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getUserAP = async (authToken) => {
  try {
    const response = await axiosInstance.get('/ap', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(
      'Error getting user AP: ',
      error.response?.data || error.message
    );
    throw error;
  }
};
