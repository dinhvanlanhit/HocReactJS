import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';  
import LazyLoad from '../components/lazyload/lazyload'
const Login = lazy(()=>import('../modules/login/login'))
function Auth() {
    const macth = useRouteMatch();
    console.log(macth);
    return(
        <Suspense fallback={<LazyLoad/>}>
            <div className="hold-transition login-page">
                    <Switch>  
                        <Redirect exact from="/auth" to={`${macth.url}/login`}/>  
                        <Route path={`${macth.url}/login`} component={Login}/>  
                    </Switch>
            </div>
        </Suspense>
        
    )
}
export default Auth;