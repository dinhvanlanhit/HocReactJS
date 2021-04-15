export const addTask =(body)=>{
        return{
            type:"ADD_TASK",
            body:body
        };
   
}
export const deleteTask=(body)=>{
    return{
        type:"DELETE_TASK",
        body:body
    };
}