import history from "../../helpers/history";
import authApi from "../../api/authApi"
const login=(body)=>{
    return async dispatch => {
        dispatch({
            type:"LOGIN",
            loading:true,
            message:null,
        });
        try {
            const data = await authApi.login(body);
            if(data.number_code==0){
                dispatch({
                    type:"LOGIN",
                    number_code: data.number_code,
                    access_token: data.access_token,
                    expires_in: data.expires_in,
                    message:data.message,
                    data:data.data,
                    loading:false,
                });
                history.push('/')
            }else{
                dispatch({
                    type:"LOGIN",
                    number_code: data.number_code,
                    loading:false,
                    message:data.message,
                });
            }
        } catch (error) {
            console.log("login Lỗi")
        }
    }
}
const register=(body)=>{
    return async dispatch => {

    }
}
export const authActions = {
    login
};
