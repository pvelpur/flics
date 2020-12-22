import React from 'react'
import Dashboard from './core/Dashboard'
import {Redirect, Route, Switch} from 'react-router-dom'
import Signup from './user/Signup';
import Login from './user/Login'
import { useSelector } from 'react-redux';

function MainRouter() {
    const auth = useSelector(state => state.auth)

    const isAuth = () => {
        if(auth.currentUser && auth.authToken) {
            return true
        }
        else {
            return false;
        }
    }

    return (
        <div>
            <Switch>
                <Route exact path="/" render={()=> (
                    !isAuth() ? (<Redirect to="/login"/>)
                    :
                    <Dashboard />
                )} />
                <Route exact path="/signup" render={()=> (
                    isAuth() ? (<Redirect to="/"/>)
                    :
                    <Signup />
                )} />
                <Route exact path="/login" render={()=> (
                    isAuth() ? (<Redirect to="/"/>)
                    :
                    <Login />
                )} />
                
            </Switch>
        </div>
    )
}

export default MainRouter;