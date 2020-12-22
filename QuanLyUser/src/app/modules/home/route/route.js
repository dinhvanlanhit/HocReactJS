
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import Home from '../pages/home';

function RouteHome () {
        const match = useRouteMatch();
        console.log("Route Home");
        return (
            
                <Switch>
                    <Route  path={`${match.url}/`}  component={Home} />
                </Switch>
           
        );
}
export default RouteHome;