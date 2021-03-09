import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://us-central1-js04-b4877.cloudfunctions.net/api/products',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// singleton instance
export default axiosService;