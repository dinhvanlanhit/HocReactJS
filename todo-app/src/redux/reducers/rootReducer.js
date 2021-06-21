import {combineReducers} from 'redux'
import dashboardReducer from './dashboardReducer'
const rootReducer = combineReducers({
    dashboardReducer:dashboardReducer
});
export default rootReducer;