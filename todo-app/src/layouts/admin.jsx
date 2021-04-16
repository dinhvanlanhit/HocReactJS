import { lazy, Suspense } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';  
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar'
import LazyLoad from '../components/lazyload/lazyload'
const routerDashboard = lazy(()=>import('../modules/dashboard/route/routerDashboard'))
const RouterTodo = lazy(()=>import('../modules/todo/route/routerTodo'))
function Admin() {
    const mainStore =  useSelector(state => state.mainReducer);
    const macth = useRouteMatch();
    // console.log('Layout Admin',macth);
    return(
        <div className={mainStore.statusSidebarOpenClose==true?"sidebar-collapse sidebar-mini layout-fixed":'sidebar-mini layout-fixed'}>     
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="content-wrapper"><br></br>
                    <Suspense fallback={<LazyLoad/>}>
                       
                                <Switch>  
                                    <Redirect exact from={`${macth.url}`} to={`${macth.url}/dashboard`}/>  
                                    <Route path={`${macth.url}/dashboard`} component={routerDashboard}/>  
                                    <Route path={`${macth.url}/todo`} component={RouterTodo}/>  
                                </Switch>
                        
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
export default Admin;