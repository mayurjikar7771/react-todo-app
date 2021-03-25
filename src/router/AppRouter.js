import React from 'react';

import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Login from './../Login/LoginContainer';
import Dashboard from './../Dashboard';
import Profile from './../Profile/ProfileContainer';
import Logout from './../Logout';
import NotFound from './../NotFound';

const AppRouter = () => {
    return<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/logout" component={Logout}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter> 
}

export default AppRouter;