
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import Login from '../pages/login';

function RouteAuth () {
        const match = useRouteMatch();
        console.log({ match });
        return (
            
                <Switch>
                    <Route  path={`${match.url}/`}  component={Login} />
                </Switch>
           
        );
}
export default RouteAuth;