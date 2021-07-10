import todoApi from './../../api/todoApi'
const getList=(params)=>{
    return async dispatch=>{
        dispatch({
            type:"LOADING",
            loading:true
        });
        try {
            const rs = await todoApi.getList(params);
            if(rs.status==='success'){
                dispatch({
                    type:"GET_LIST",
                    data:rs.result.data,
                    totalPage:rs.result.totalPage,
                    loading:false
                });
            }else{
                dispatch({
                    type:"LOADING",
                    loading:false
                });
            }
        } catch (error) {
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
        console.log(id);
        const data = await todoApi.delete(id);
        return  data;
    } catch (error) {
            
    }
}
export const todoActions = {
    getList,
    getByID,
    update,
    create,
    deleteData
};
