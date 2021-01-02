import React, { Component } from 'react';
import classes from './Auth.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/Auth';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



class Auth extends Component {

    state = {
        logInSuccess: false,
        isSignup: true
    }


    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    onClick = (event) => {
        event.preventDefault();

        console.log(this.props.user)

        axios.post("http://localhost:8080/login", this.props.user)
            .then((response) => {
                console.log(response.data)
                if (response.data)
                    this.setState({ logInSuccess: true })

            })
            .catch((err) => {
                console.log('greskica')
            });

        setTimeout(() => {
            console.log(this.state.logInSuccess)
        }, 3000);
    };

    render() {

        return (
            <div className={classes.Auth}>
                <form>
                    <label className={classes.Label}>Username: </label>
                    <input className={classes.Input} onChange={(event) => this.props.onChangeInputUsername(event.target.value)} value={this.props.username} type="text" />
                    <br />
                    <label className={classes.Label}>Password: </label>
                    <input className={classes.Input} onChange={(event) => this.props.onChangeInputPassword(event.target.value)} value={this.state.password} type="password" />
                    <br />
                    <button className={classes.ButtonSuccess} onClick={(event) => this.onClick(event)} >
                        Potvrdi
                    {this.state.logInSuccess ? <Redirect to="/" /> : null}
                    </button>
                </form>
                <button className={classes.ButtonDanger} onClick={() => this.switchAuthModeHandler()}>
                    Prebaci na {this.state.isSignup ? 'Prijavljivanje' : 'Registrovanje'}</button>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeInputUsername: (event) => dispatch(actions.inputUsername(event)),
        onChangeInputPassword: (event) => dispatch(actions.inputPassword(event)),
        // onLogin: (user) => dispatch(actions.login(user))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);