const initialState = {
    number_code: null,
    message: null,
    status: null,
    access_token:null,
    token_type: null,
    data:null,
    expires_in: null
}
const authReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                ...state,
                number_code:action.number_code,
                message:action.message,
                status:action.status,
                access_token:action.access_token,
                token_type:action.token_type,
                data:action.data,
                expires_in:action.expires_in,
            };
        case "LOGIN_REQUEST":
            return {
                loggingIn: true,
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {};
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}
export  default authReducer;