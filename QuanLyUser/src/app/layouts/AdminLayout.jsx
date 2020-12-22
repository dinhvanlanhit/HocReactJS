import React, { useState, useEffect,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import RouteHome from "../modules/home/route/route";
import RouteUser from "../modules/user/route/route";
function AdminLayout(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route path={`${match.url}/`} component={RouteHome} />       
            <Route path={`${match.url}/user`} component={RouteUser} />       
        </Switch>
    );
}

export default AdminLayout;