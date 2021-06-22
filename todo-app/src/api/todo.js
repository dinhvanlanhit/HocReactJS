import axiosClient from "./axiosClient";
const todoApi ={
    login:(params)=>{
        const url = "/login";
        return axiosClient.get(url,{params})
    }
}
export default todoApi;