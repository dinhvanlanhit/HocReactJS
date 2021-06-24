const initialState = {
   lists:[],
   loading:false
}
const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case "GET_ALL":
            const  getAll = {...state};
            getAll.lists=action.lists
            getAll.loading=action.loading
            return getAll;
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