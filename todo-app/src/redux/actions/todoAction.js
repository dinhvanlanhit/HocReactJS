import todoApi from './../../api/todoApi'
import history from '../../helpers/history';
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
const create =(body)=>{
    return async dispatch=>{
        dispatch({
            type:"ADD",
            loading:true
        });
        try {
            const data = await todoApi.create(body);
            if(data.status=='success'){
                dispatch({
                    type:"ADD",
                    loading:false,
                    status:'success'
                });
            }else{
                dispatch({
                    type:"ADD",
                    loading:false,
                    status:'error'
                });
            }
            
        } catch (error) {
            
        }
    }
}
const update =(body)=>{
    return async dispatch=>{
        dispatch({
            type:"UPDATE",
            loading:true
        });
        try {
            const data = await todoApi.update(body);
            if(data.status=='success'){
                dispatch({
                    type:"UPDATE",
                    loading:false,
                    status:'success'
                });
                history.push('/todo/list')
            }else{
                dispatch({
                    type:"UPDATE",
                    loading:false,
                    status:'error'
                });
            }
            
        } catch (error) {
            
        }
    }
}
export const todoActions = {
    getAll,
    search,
    getByID,
    update,
    create
};
