import React from 'react';

import {BrowserRouter,Route, Switch} from 'react-router-dom';
 
import PrivateRoute from './PrivateRoute';
import Login from './../Login/LoginContainer';
import Dashboard from './../Dashboard';
import Profile from './../Profile/ProfileContainer';
import Logout from './../Logout';
import NotFound from './../NotFound';

const AppRouter = () => {
    return<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/logout" component={Logout}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter> 
}

export default AppRouter;