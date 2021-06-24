import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../helpers/history'

import Admin from '../resources/layouts/admin'
import Auth from '../resources/layouts/auth'
// view  auth 
import Login from '../resources/pages/login/index'
import Register from '../resources/pages/register/index'
// views admin
import Dashboard from '../resources/pages/dashboard/index'
import TodoList from '../resources/pages/todo/todoList'
import TodoEdit from '../resources/pages/todo/todoEdit'
import TodoAdd from '../resources/pages/todo/todoAdd'
export default () => {
  return (
    <Router history={history}>
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
                  <Route path='/todo/add'  component={TodoAdd} />
                  <Route path='/todo/edit/:id'  component={TodoEdit} />
                </Switch>
            </Route>
            </Switch>
          </Admin>
        </Route>

        
       
      </Switch>
    </Router>
  )

}