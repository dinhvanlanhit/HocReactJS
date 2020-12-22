import React, { useState, useEffect,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch,Link,NavLink } from "react-router-dom";
import RouteHome from "../modules/home/route/route";
import RouteUser from "../modules/user/route/route";
function AdminLayout(props) {
    console.log('layout Admin')
    return (
        <div>
            <br></br>
            <div className="container">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <NavLink   className="nav-link " activeClassName="active" to="/dashboard" exact={true}>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink   className="nav-link" activeClassName="active" to="/user">USER</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink   className="nav-link" activeClassName="active" to="/auth">LOGOUT</NavLink>
                    </li>
                </ul>
            </div>
           
            <Switch>
                <Redirect exact from='/' to='/dashboard'></Redirect>
                <Route path='/user' component={RouteUser} />  
                <Route path='/dashboard' component={RouteHome} />  
            </Switch>
        </div>
        
    );
}

export default AdminLayout;