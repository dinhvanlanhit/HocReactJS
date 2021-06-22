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
            const  addState = {...state};
            addState.lists=action.body.lists
            addState.loading=action.body.loading
            return addState;
        case "SEARCH":
            const  searchState = {...state};
            searchState.lists=action.body.lists
            searchState.loading=action.body.loading
            return searchState
        default:
            return state;
    }
}
export  default todoReducer;