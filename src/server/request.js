import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5cc45d471c5cf260d33ed6ec/api',
});
export default instance;
