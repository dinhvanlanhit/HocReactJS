import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import Admin from '../resources/layouts/admin'
import Auth from '../resources/layouts/auth'
// view  auth 
import Login from '../resources/pages/login/index'
// views admin
import Dashboard from '../resources/pages/dashboard/index'
import TodoList from '../resources/pages/todo/todoList'
export default () => {
  return (
    <Router>
      <Switch>
      
        <Redirect path="/login" to="/auth" ></Redirect>
        <Route path='/auth' >
          <Auth>
            <Switch>
              <Route path='/'  component={Login} />
            </Switch>
          </Auth>
        </Route>
       
        <Route path='/admin/:path?' exact>
          <Admin>
            <Switch>
              <Route path='/admin' exact component={Dashboard} />
              <Route path='/admin/todo'  component={TodoList} />
            </Switch>
          </Admin>
        </Route>

        
       
      </Switch>
    </Router>
  )

}