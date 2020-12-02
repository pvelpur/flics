import React from 'react'
import Dashboard from './core/Dashboard'
import {Route, Switch} from 'react-router-dom'
import Signup from './user/Signup';
import Login from './user/Login'

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            
        </Switch>
    </div>
)

export default MainRouter;