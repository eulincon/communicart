import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default api;