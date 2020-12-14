import React, { Component } from 'react';
import classes from './Auth.css';

class Auth extends Component {

    state = {
        password: null,
        username: null,
        user: {},
        logInSuccess: false
    }

    onChangeUser = (event) => (
        this.setState({username: event.target.value})
    )
    onChangePass  = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state.password)
        
    }
    Submit = () => {
        
        this.setState( {
            user: {
                username: this.state.username,
                password: this.state.password
            }
        })
        console.log(this.state.user)   
    }


    render(){
        return(
            <div className={classes.Auth}>
                <label>Username: </label>
                <input onChange={(event) => this.onChangeUser(event)} value={this.state.username} type="text"/>
                <br />
                <label>Password: </label>
                <input onChange={(event)=> this.onChangePass(event)} value={this.state.password} type="password"/>
                <br />
                <button onClick={this.Submit} >Prijavi se</button>
            </div>
        )
    }
}
export default Auth;