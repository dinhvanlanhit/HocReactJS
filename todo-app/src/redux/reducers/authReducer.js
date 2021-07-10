const initialState = {
    number_code: null,
    access_token:null,
    expires_in: null,
    message:null,
    data:null,
    loading:false,
}
const authReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            const stateNew = {...state};
            stateNew.number_code=action.number_code;
            if(action.access_token!=undefined){
                stateNew.access_token=action.access_token;
            }
            if(action.expires_in!=undefined){
                stateNew.expires_in=action.expires_in;
            }
            if(action.data!=undefined){
                stateNew.data=action.data;
            }
            stateNew.message = action.message;
            stateNew.loading = action.loading;
            console.log("stateNew",stateNew);
            return stateNew;
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}
export  default authReducer;