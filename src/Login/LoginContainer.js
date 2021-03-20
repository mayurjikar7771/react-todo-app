
import React from 'react';
import Login from './Login';

class LoginContainer extends React.Component{

    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        }

    }

     handleEmail = (e) => {
              // console.log(e.target.value);  // you check this input value in console

              // You can see value in input box using this method START
              this.setState({
                  email: e.target.value
              });
              // end
     }

    handlePassword = (e) =>{

        this.setState({
            password: e.target.value
        });
    }
    render(){
         
        console.log('state',this.state);
        const { email, password} = this.state;
        return <Login 
         email = {email}
         password = {password}
         handleEmail = {this.handleEmail}
         handlePassword = {this.handlePassword}
        />
    }
}

export default LoginContainer;