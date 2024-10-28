import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5002/api'; // '13.233.236.82'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const RestAPI = axios;

export default RestAPI;