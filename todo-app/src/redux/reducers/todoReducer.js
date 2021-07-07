const initialState = {
    data:[],
    totalPage:0,
    page:0,
    loading:false
}
const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case "GET_LIST":
            const  getList = {...state};
            getList.data = action.data;
            getList.totalPage = action.totalPage
            getList.loading = action.loading
            return getList;
        default:
            return state;
    }
}
export  default todoReducer;