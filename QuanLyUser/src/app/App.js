
import React,{Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useRouteMatch } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
function App() {
  return (
        <Router>
              <Switch>
                  <Route path="/auth" component={AuthLayout}/>
                  <Route path="/" component={AdminLayout} />
              </Switch>
        </Router>
  );
}

export default App;
