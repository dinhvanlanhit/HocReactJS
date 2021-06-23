import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import Admin from '../resources/layouts/admin'
import Auth from '../resources/layouts/auth'
// view  auth 
import Login from '../resources/pages/login/index'
import Register from '../resources/pages/register/index'
// views admin
import Dashboard from '../resources/pages/dashboard/index'
import TodoList from '../resources/pages/todo/todoList'
export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register'  component={Register} />
        <Route>
          <Admin>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/todo'>
                <Switch>
                  <Route path='/todo/list'  component={TodoList} />
                </Switch>
            </Route>
            </Switch>
          </Admin>
        </Route>

        
       
      </Switch>
    </Router>
  )

}