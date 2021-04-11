import axios from 'axios';

const instance = axios.create({
   // baseURL: 'https://localhost:8080/'
   baseURL: 'https://react-burger.firebaseio.com/'

});

export default instance;