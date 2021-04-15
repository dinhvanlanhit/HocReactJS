const initialState = {
    taskList:['FIX BUG EINVOICE']
}
const taskReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'GET_TASK':
            return state;
        case "ADD_TASK":
            const newListTask = [...state.taskList];
            newListTask.push(action.body);
            return {
                ...state,
                taskList:newListTask
            };
        case "DELETE_TASK":
            console.log(action);
            const taskList = [...state.taskList];
            taskList.splice(action.body,1);
            return{
                ...state,
                taskList:taskList
            };
        default:
            return state;
    }
}
export default taskReducer;