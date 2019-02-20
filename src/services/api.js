import axios from 'axios';

const api = axios.create({
    baseURL: 'http://devtech-twitter.herokuapp.com'
});

export default api;