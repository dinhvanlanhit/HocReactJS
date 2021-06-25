import axiosClient from "./axiosClient";
const todoApi ={
    getList:(params)=>{
        const url = `/todo/getList?start=${params.start}&limit=${params.limit}&search=${params.query}`;
        return axiosClient.get(url)
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
    delete:(params)=>{
        const url = `/todo/delete/${params.id}`;
        return axiosClient.post(url)
    }
}
export default todoApi;