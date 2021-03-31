import React,{Component} from 'react';     
import {Route,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
const PrivateRoute = (props) => {
   //console.log('props',props);
    const {component:Component, ...rest} = props;
    //console.log('rest',rest);
    const isAuthenticated = !!Cookies.get('token');

    return <Route 
     {...rest}
     render =  {(props) => isAuthenticated ? <Component {...props}/> : <Redirect to="/" />}
    
    />

    
}

export default PrivateRoute;