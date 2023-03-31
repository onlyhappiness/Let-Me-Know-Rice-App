import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getApiHost = () => {
  if (__DEV__) return `http://localhost:4000`;
};

const api = axios.create({
  baseURL: getApiHost(),
});

export default api;

api.interceptors.request.use(async (request: any) => {
  const token = await AsyncStorage.getItem('token');

  console.log('토큰 들어갔어요???', token);

  if (!token) {
    delete api.defaults.headers.common.Authorization;
  }
  if (!request.headers.Authorization) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
