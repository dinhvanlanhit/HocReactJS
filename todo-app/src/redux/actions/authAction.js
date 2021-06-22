import authApi from "../../api/login"
export const  login  = async (body)=>{
    const data = await authApi.login(body);
    console.log(data);
    // return dispatch =>{
    //     console.log(data);
    //     // dispatch({
    //     //     type:"LOGIN",
    //     //     status:true,
    //     //     info:body 
    //     // });
    // }
}