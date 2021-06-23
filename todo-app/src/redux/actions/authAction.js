import authApi from "../../api/authApi"
export const  login  = async (body)=>{
    const data = await authApi.login(body);
    // return dispatch =>{
    //     console.log(data);
    //     // dispatch({
    //     //     type:"LOGIN",
    //     //     status:true,
    //     //     info:body 
    //     // });
    // }
}
export const  registerUser  = async (body)=>{
    const data = await authApi.register(body);
    console.log(data);
}
