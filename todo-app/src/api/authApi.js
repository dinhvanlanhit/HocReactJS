import axiosClient from "./axiosClient";
const authApi ={
    login:async(params)=>{
        const url = "/auth/login";
        return await axiosClient.post(url,params)
    },
    register:async(params)=>{
        const url = "/auth/register";
        return await axiosClient.post(url,params)
    }
}
export default authApi;