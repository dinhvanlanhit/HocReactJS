import React from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import Auth from './layouts/auth';
import Admin from './layouts/admin'
import './css/App.css'
function App() {
  return (
    <Router>  
        <Switch>  
          <Route path="/auth" component={Auth} />  
          <Redirect exact from="/" to="cpane" />  
          <Route path="/cpane" component={Admin} />  
        </Switch>  
      </Router>  
  );
}
export default App;
