import React, { useState, useEffect,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import RouteLogin from "../modules/login/route/route";
function AuthLayout(props) {
    const match = useRouteMatch();
    console.log('layout Auth',match)
    return (
        <Switch>
            <Redirect exact from='/auth' to='/auth/login'></Redirect>
            <Route path='/auth/login' component={RouteLogin} />       
        </Switch>
        
    );
}

export default AuthLayout;