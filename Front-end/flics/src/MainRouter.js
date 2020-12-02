import React from 'react'
import Dashboard from './core/Dashboard'
import {Route, Switch} from 'react-router-dom'
import Signup from './user/Signup';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            
        </Switch>
    </div>
)

export default MainRouter;