import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';  
const Dashboard = lazy(()=>import('../pages/dashboard'))
function RouterDashboard() {
    const macth = useRouteMatch();
    // console.log('RouterDashboard',macth);
    return (
        <>
        <Suspense fallback={<></>}>
                <Switch>  
                    {/* <Redirect exact from={`${macth.url}/`} to={`${macth.url}/`}/>   */}
                    <Route path="/" component={Dashboard}/>  
                </Switch>
        </Suspense>
        </>
    )
}
export default RouterDashboard;