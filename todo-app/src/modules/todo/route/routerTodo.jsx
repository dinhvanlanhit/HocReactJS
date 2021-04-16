import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';  
const Todo = lazy(()=>import('../pages/todo'))
function RouterTodo() {
    const macth = useRouteMatch();
    return (
        <>
        <Suspense fallback={<></>}>
                <Switch>  
                    <Redirect exact from={`${macth.url}`} to={`${macth.url}/receive`}/>  
                    <Route path={`${macth.url}/receive`} component={Todo}/>  
                </Switch>
        </Suspense>
        </>
    )
}
export default RouterTodo;