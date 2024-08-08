import axios from 'axios';

export default axios.create({
  // baseURL: 'http://192.168.0.111:3001',
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
});
