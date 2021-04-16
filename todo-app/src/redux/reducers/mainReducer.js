const initialState = {
    statusSidebarOpenClose:"",
    statusSibladeMoblie:"",
    status:true,
}
const mainReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'OPEN_CLOSE_SIDBAR':
            const newState = {...state};
            newState.statusSidebarOpenClose = action.body.statusSidebarOpenClose;
            newState.statusSibladeMoblie = action.body.statusSibladeMoblie;
            newState.status =action.body.status;
            return newState;
        default:
            return state;
    }
}
export  default mainReducer;