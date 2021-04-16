const initialState = {
    statusSidebarOpenClose:false,
}
const mainReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'OPEN_SIDBAR':
            const newState = {...state};
            if(action.body){
                newState.statusSidebarOpenClose =false;
            }else{
                newState.statusSidebarOpenClose =true;
            }
            return newState;
        default:
            return state;
    }
}
export  default mainReducer;