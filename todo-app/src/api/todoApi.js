import axiosClient from "./axiosClient";
const todoApi ={
    getAll:(params)=>{
        const url = `/todo/getAll`;
        return axiosClient.get(url)
    },
    search:(query)=>{
        const url = `/todo/search?search=${query}`;
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