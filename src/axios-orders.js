import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburgerbuilder-de9fc.firebaseio.com/'
});

export default instance;