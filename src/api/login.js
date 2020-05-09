import axios from '../libs/axiosRequest'
// import axios from 'axios'


export const login = () => {
    return axios.request({
        method: 'get',
        url: '/api/login',
    });
};