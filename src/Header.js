import React from 'react';
import{Row,Col} from 'antd'; 
import {Link} from 'react-router-dom';
const Header = () => {

    return  <Row className="header">
            <Col span={4}>
               <p className="logo">Todo App</p>
            </Col>
            <Col span={20} className="header-links">
               <Link to="/dashboard">Dashboard</Link>
               <Link to="/profile">Profile</Link>
               <Link to="/logout">Logout</Link>
            </Col>
        </Row>
}

export default Header;