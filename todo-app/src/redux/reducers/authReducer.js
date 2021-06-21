const initialState = {
    status:false,
    loading:false
}
const authReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            const  newStateLogin = {...state};
            newStateLogin.status= action.body.status
            newStateLogin.loading=action.body.loading
            return newStateLogin;
        case "LOGOUT":
            const  newStateLogout = {...state};
            newStateLogout.status= action.body.status
            newStateLogout.loading=action.body.loading
            return newStateLogout;
        default:
            return state;
    }
}
export  default authReducer;