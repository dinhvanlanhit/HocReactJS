import React, { useState, useEffect,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import RouteHome from "../modules/home/route/route";
import RouteUser from "../modules/user/route/route";
function AdminLayout(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path='/user' component={RouteUser} />    
            <Route path='/' component={RouteHome} />       
        </Switch>
    );
}

export default AdminLayout;