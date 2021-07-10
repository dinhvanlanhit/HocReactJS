import axiosClient from "./axiosClient";
const todoApi ={
    getList:(params)=>{
        const url = `/todo/getList?page=${params.page}&limit=${params.limit}&search=${params.query}`;
        return axiosClient.get(url);
    },
    create:(params)=>{
        const url = `/todo/create`;
        return axiosClient.post(url,params)
    },
    getByID:(id)=>{
        const url = `/todo/edit/${id}`;
        return axiosClient.get(url)
    },
    update:(params)=>{
        const url = `/todo/edit`;
        return axiosClient.post(url,params)
    },
    delete:(id)=>{
        const url = `/todo/delete`;
        return axiosClient.post(url,{id})
    }
}
export default todoApi;