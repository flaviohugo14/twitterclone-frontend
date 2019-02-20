import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devtech-twitter.herokuapp.com'
});

export default api;