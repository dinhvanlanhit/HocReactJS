import todoApi from './../../api/todoApi'
const getAll=()=>{
    return async dispatch=>{
        dispatch({
            type:"GET_ALL",
            loading:true
        });
        try {
            const data = await todoApi.getAll();
            dispatch({
                type:"GET_ALL",
                data:data.data,
                status:'success',
                loading:false
            });
        } catch (error) {
            dispatch({
                type:"GET_ALL",
                loading:false
            });
        }
    }
}
const getByID = async (id)=>{
    try {
        const data = await todoApi.getByID(id);
        return data;
    } catch (error) {
      console.log(error);
    }
}
const search=(query)=>{
    return async dispatch=>{
        dispatch({
            type:"SEARCH",
            loading:true
        });
        try {
            const data = await todoApi.search(query);
            dispatch({
                type:"SEARCH",
                data:data.data,
                status:'success',
                loading:false
            });
        } catch (error) {
            dispatch({
                type:"SEARCH",
                loading:false
            });
        }
    }
}
const create = async (body)=>{
    try {
        const data = await todoApi.create(body);
        return  data;
    } catch (error) {
            
    }
}
const update = async (body)=>{
    try {
        const data = await todoApi.update(body);
        return  data;
    } catch (error) {
            
    }
}
const deleteData = async (id)=>{
    try {
        const data = await todoApi.delete(id);
        return  data;
    } catch (error) {
            
    }
}
export const todoActions = {
    getAll,
    search,
    getByID,
    update,
    create,
    deleteData
};
