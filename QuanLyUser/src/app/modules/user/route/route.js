
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import User from '../pages/user';

function RouteUser () {
       
        const match = useRouteMatch();
        console.log({ match });
        return (
                <Switch>
                    <Route  path={`${match.url}/`}  component={User} />
                </Switch>
        );
}
export default RouteUser;