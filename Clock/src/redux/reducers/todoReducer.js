
const initialState = {
    todoList:['HOC REACR JS','HỌC NODE JS','HỌC REDUX']
}
const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GET_TODO':
            return state;
        case 'ADD_TODO':
            const todoListListNew = [...state.todoList];
            todoListListNew.push(action.body);
            return {
                ...state,
                todoList:todoListListNew
            }
        default:
            return state;
    }
}
export default todoReducer;