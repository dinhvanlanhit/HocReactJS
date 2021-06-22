import {combineReducers} from 'redux'
import dashboardReducer from './dashboardReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
    dashboardReducer:dashboardReducer,
    todoReducer:todoReducer,
    authReducer:authReducer
});
export default rootReducer;