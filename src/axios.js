import  axios from 'axios';

const instance = axios.create({
   baseURL : 'https://tinder-backend-agam.herokuapp.com'

});
export default instance
