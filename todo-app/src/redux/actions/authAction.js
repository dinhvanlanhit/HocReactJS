import authApi from "../../api/authApi"
const login=(body)=>{
    return async dispatch => {
        dispatch({
            type:"LOGIN",
            number_code: 0,
            message: null,
            status: null,
            access_token:null,
            token_type: null,
            data:null,
            expires_in: null
        });
        try {
            const data = await authApi.login(body);
            if(data.number_code==0){
                dispatch(data);
            }else{

            }
        } catch (error) {
            console.log("login Lỗi")
        }
    }
}
export const authActions = {
    login
};
