
import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import actions from './Action';
import Cookies from 'js-cookie';

class LoginContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

        if(Cookies.get('token')){
            this.props.history.push('/dashboard');
        }
      
    }

     componentWillUpdate() {

            if(Cookies.get('token')){
                this.props.history.push('/dashboard');
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

    handleLogin = (e) => {
      

        this.props.userLogin(this.state.email);
    }

    render(){
         
        const { email, password} = this.state;
        return <Login 
         email = {email}
         password = {password}
         handleEmail = {this.handleEmail}
         handlePassword = {this.handlePassword}
         handleLogin = {this.handleLogin}
        />
    }
}

const mapStateToProps = (state) => {
    
    return state;
}

const mapDispatchToProps = {
    userLogin: actions.userLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);