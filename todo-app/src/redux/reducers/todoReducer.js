const initialState = {
   data:{
       lists:[],
       per_page:0,
       current_page:10,
       total:0,
   },
   loading:false
}
const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case "GET_ALL":
            const  getAll = {...state};
            if(action.status=='success'){
                getAll.data=action.data
            }
            getAll.loading=action.loading
            return getAll;
        case "SEARCH":
            const  searchState = {...state};
            if(action.status=='success'){
                searchState.data=action.data
            }
            searchState.loading= action.loading
            return searchState
        default:
            return state;
    }
}
export  default todoReducer;