import axios from 'axios';

const BASE_URL = 'http://www.mocky.io/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use(({data}) => data);

export default instance;