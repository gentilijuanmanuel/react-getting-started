import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(request => {
  console.log(request);
  // Here you can edit the request, adding headers, etc.
  return request;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

export default instance;
