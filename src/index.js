import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import Login from './Login/LoginContainer';
import './style.css';

import Dashboard from './Dashboard';
import Profile from './Profile/ProfileContainer';
ReactDOM.render(<Profile />, document.getElementById('root'));
