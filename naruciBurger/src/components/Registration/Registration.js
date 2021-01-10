import React, { Component } from 'react'
import classes from './Registration.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/User';


class Registration extends Component {


    _onSubmit = (event) => {
        event.preventDefault();
        this.props.onEnterUser(this.props.user)

    }


    render() {

        return (
            <div className={classes.Registration}>
            <form>
                <label className={classes.Label}>Ime: </label>
                <input className={classes.Input}  type="text" onChange = {(event) => this.props.onChangeIme(event.target.value)} />
                <br />
                <label className={classes.Label}>Password: </label>
                <input className={classes.Input}  type="password" onChange = {(event) => this.props.onChangeSifru(event.target.value)} />
                <br />
                <label className={classes.Label}>Email: </label>
                <input className={classes.Input}  type="text" onChange = {(event) => this.props.onChangeEmail(event.target.value)} />
                <br />
                <label className={classes.Label}>Adresa: </label>
                <input className={classes.Input}  type="text" onChange = {(event) => this.props.onChangeAdresu(event.target.value)} />
                <br />
                <label className={classes.Label}>Br. Telefona: </label>
                <input className={classes.Input}  type="text" onChange = {(event) => this.props.onChangeTelefon(event.target.value)} />
                <br />
               
                <button to="/login"  className={classes.ButtonSuccess} onClick = {(event) => this._onSubmit(event)} >
                    Potvrdi
                </button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {

        ime: state.user.ime,
        sifra: state.user.sifra,
        email: state.user.email,
        adresa: state.user.adresa,
        telefon: state.user.br_telefon,

        user: state.user.user

    };
};

const mapDispatchToProps = dispatch => {
    return {

        onChangeIme: (event) => dispatch(actionCreators.inputIme(event)),
        onChangeSifru: (event) => dispatch(actionCreators.inputSifra(event)),
        onChangeEmail: (event) => dispatch(actionCreators.inputEmail(event)),
        onChangeAdresu: (event) => dispatch(actionCreators.inputAdresa(event)),
        onChangeTelefon: (event) => dispatch(actionCreators.inputTelefon(event)),
        onEnterUser: (user) => dispatch(actionCreators.enterUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Registration);