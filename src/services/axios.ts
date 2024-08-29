import axios from 'axios';
import { baseURL } from '../secret';

export default axios.create({
  baseURL,
  headers: { 'Access-Control-Allow-Origin': '*' },
});
