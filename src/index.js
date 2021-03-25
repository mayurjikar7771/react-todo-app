import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';

import AppRouter from './router/AppRouter';
// import Login from './Login/LoginContainer';
// import Dashboard from './Dashboard';
// import Profile from './Profile/ProfileContainer';
ReactDOM.render(<AppRouter />, document.getElementById('root'));
