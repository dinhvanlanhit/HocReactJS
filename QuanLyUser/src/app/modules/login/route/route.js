
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import Login from '../pages/login';
function RouteAuth () {
        const match = useRouteMatch();
        console.log("Route Auth");
        return (
                <Switch>
                    <Route  path='/'  component={Login} />
                </Switch>
        );
}
export default RouteAuth;