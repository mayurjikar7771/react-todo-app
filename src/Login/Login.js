import React from 'react';

import {Row, Col, Card, Input, Button, Form} from 'antd';


const Login = (props) => {
     return (
     <Row className="login">
         <Col span={9}></Col>
         <Col span = {6}>
          <Card>
                <h1>Login Form</h1>
                <Form onFinish={props.handleLogin}>
                    <Form.Item>
                        <Input 
                             type="text"
                             placeholder="Username"
                             value={props.email}
                             onChange={props.handleEmail}
                        />
                        
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            type="text"
                            placeholder="Password"
                            value={props.password}
                            onChange={props.handlePassword}
                           
                        />
                    </Form.Item>
                    <Form.Item>
                         <Button type="primary" htmlType="submit">Login
                         </Button>
                    </Form.Item>
                </Form>
          </Card>
          <Col span={9}></Col>
         </Col>
     </Row>
     )
}

export default Login;