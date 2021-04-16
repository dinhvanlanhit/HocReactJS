import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';  
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar'
import LazyLoad from '../components/lazyload/lazyload'
const routerDashboard = lazy(()=>import('../modules/dashboard/route/routerDashboard'))
const RouterTodo = lazy(()=>import('../modules/todo/route/routerTodo'))

function Admin() {
    const macth = useRouteMatch();
    console.log('Layout Admin',macth);
    return(
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                    <Suspense fallback={<LazyLoad/>}>
                        <div className="hold-transition login-page">
                                <Switch>  
                                    <Redirect exact from={`${macth.url}`} to={`${macth.url}/dashboard`}/>  
                                    <Route path={`${macth.url}/dashboard`} component={routerDashboard}/>  
                                    <Route path={`${macth.url}/todo`} component={RouterTodo}/>  
                                </Switch>
                        </div>
                    </Suspense>
                </div>
            </div>
        </>
    )
}
export default Admin;