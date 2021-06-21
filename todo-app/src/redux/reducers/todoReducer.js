const initialState = {
   lists:[
       {
           id:1,
           name:"code",
           status:true
       }
   ],
   loading:false
}
const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case "GET_ALL":
            return state;
        case "ADD":
            const  newState = {...state};
            newState.lists=action.body.lists
            newState.loading=action.body.loading
            return newState;
            break;
        default:
            return state;
    }
}
export  default todoReducer;