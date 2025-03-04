import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9001/api', // Asegúrate de que esta URL coincida con la de tu servidor
});

export default instance;