const initialState = {
    status:false,
    loading:false,
    info:null
}
const authReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            const  newStateLogin = {...state};
            newStateLogin.status= action.status
            newStateLogin.loading=action.loading
            newStateLogin.loading=action.info
            return newStateLogin;
        case "LOGOUT":
            const  newStateLogout = {...state};
            newStateLogout.status= action.status
            newStateLogout.loading=action.loading
            newStateLogout.loading=action.info
            return newStateLogout;
        default:
            return state;
    }
}
export  default authReducer;