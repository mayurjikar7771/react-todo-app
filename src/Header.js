import React from 'react';
import{Row,Col} from 'antd'; 
const Header = () => {

    return  <Row className="header">
            <Col span={4}>
               <p className="logo">Todo App</p>
            </Col>
            <Col span={20} className="header-links">
               <a href="">Dashboard</a>
               <a href="">Profile</a>
               <a href="">Logout</a>
            </Col>
        </Row>
}

export default Header;