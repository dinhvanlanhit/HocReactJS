import todoApi from './../../api/todoApi'
const getAll=()=>{
    return async dispatch=>{
        dispatch({
            type:"GET_ALL",
            lists:[],
            loading:true
        });
        try {
            const data = await todoApi.getAll();
            console.log(data);
            dispatch({
                type:"GET_ALL",
                lists:data.data,
                loading:false
            });
        } catch (error) {
            dispatch({
                type:"GET_ALL",
                lists:[],
                loading:false
            });
        }
    }
}
export const todoActions = {
    getAll
};
