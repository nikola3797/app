import * as actionTypes from './actionTypes';
import axios from 'axios';


export const inputIme = event => {
    return {
        type: actionTypes.INPUT_IME,
        payload: event
    };
};
export const inputSifra = event => {
    return {
        type: actionTypes.INPUT_SIFRA,
        payload: event
    };
};
export const inputEmail = event => {
    return {
        type: actionTypes.INPUT_EMAIL,
        payload: event
    };
};
export const inputAdresa = event => {
    return {
        type: actionTypes.INPUT_ADRESA,
        payload: event
    };
};
export const inputTelefon = event => {
    return {
        type: actionTypes.INPUT_TELEFON,
        payload: event
    };
};

export const enterUser = (user) => {

    return dispache => {
        axios.post('http://localhost:8080/registration', user)
            .then(response => {
                console.log(user);
            })
            .catch(error => {
                console.log('Error is handled')
            });
    }
};
