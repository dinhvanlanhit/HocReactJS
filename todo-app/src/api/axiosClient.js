import axios from 'axios';
import queryString from 'query-string'
const axiosClient = axios.create({
    baseURL:"http://apidev.com/api",
    headers:{
        'content-type':'application/json',
    },
    paramsSerializer:params=>queryString.stringify(params),
});
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {

    // Do something with request error
    return Promise.reject(error);
});
axiosClient.interceptors.response.use(response=>{
    if(response&&response.data){
        return response.data;
    }
    return response;
},(error)=>{
    return Promise.reject(error)
});
export default  axiosClient;