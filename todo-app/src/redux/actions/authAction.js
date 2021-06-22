
export const login=(body)=>{
    console.log(body);
    return dispatch =>{
        dispatch({
            type:"LOGIN",
            status:true,
            info:body 
        });
    }
}