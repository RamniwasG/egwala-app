import axios from "axios";

axios.defaults.baseURL = 'http://13.127.146.6:5002/api'; // 'localhost'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API = axios;

export default API;