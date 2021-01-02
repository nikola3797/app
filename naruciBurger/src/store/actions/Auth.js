import * as actionTypes from './actionTypes';
import axios from '../../axiosCreate';

export const inputUsername = event => {
    return {
        type: actionTypes.INPUT_USERNAME,
        payload: event
    };
};
export const inputPassword = event => {
    return {
        type: actionTypes.INPUT_PASSWORD,
        payload: event
    };
};
/*export const login = (user) => {

    return dispache => {
        axios.post('login', user)
            .then(response => {
                console.log(user);
            })
            .catch(error => {
                console.log('Error is handled')
            });
    }

}; */