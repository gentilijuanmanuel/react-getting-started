import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-8015f.firebaseio.com/'
});

export default instance;
