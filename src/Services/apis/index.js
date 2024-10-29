import axios from "axios";

axios.defaults.baseURL = 'http://3.110.94.47:5002/api'; // '52-66-203-215'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const RestAPI = axios;

export default RestAPI;