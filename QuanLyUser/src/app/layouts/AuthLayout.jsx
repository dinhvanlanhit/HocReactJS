import React, { useState, useEffect,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import RouteLogin from "../modules/login/route/route";
function AuthLayout(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/login`}></Redirect>
            <Route path={`${match.url}/login`} component={RouteLogin} />       
        </Switch>
        
    );
}

export default AuthLayout;