import {combineReducers,createStore} from "redux"
import todoReducer from './reducers/todoReducer'
import taskReducer from './reducers/taskReducer'
const rootReducer = combineReducers({
    todoReducer:todoReducer,
    taskReducer:taskReducer
});
export default rootReducer;