const initialState = {
    data:[],
    totalPage:0,
    loading:true
}
const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case "GET_LIST":
            const  getList = {...state};
            getList.data = action.data;
            getList.totalPage = action.totalPage;
            getList.loading = action.loading;
            console.log(action);
            return getList;
        case "LOADING":
            console.log(action);
            const stateLoading = {...state};
            stateLoading.loading = action.loading;
            return stateLoading;
        default:
            return state;
    }
}
export  default todoReducer;