import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: null,
    surname: null,
    username: null,
    password: null,
    mail: null,
    address: null,
    phone: null,
    user: {}
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)


    if (action.type === actionTypes.INPUT_IME) {
        return {
            ...state,
            name: action.payload,
            user: { ...state.user, name: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_PREZIME) {
        return {
            ...state,
            surname: action.payload,
            user: { ...state.user, name: state.name, surname: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_KOR_IME) {
        return {
            ...state,
            username: action.payload,
            user: { ...state.user, name: state.name, surname: state.surname, username: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_SIFRA) {
        return {
            ...state,
            password: action.payload,
            user: { ...state.user, name: state.name, surname: state.surname, username: state.username, password: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_EMAIL) {
        return {
            ...state,
            mail: action.payload,
            user: { ...state.user, name: state.name, surname: state.surname, username: state.username, password: state.password, mail: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_ADRESA) {
        return {
            ...state,
            address: action.payload,
            user: { ...state.user, name: state.name, surname: state.surname, username: state.username, password: state.password, mail: state.mail, address: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_TELEFON) {
        return {
            ...state,
            phone: action.payload,
            user: { ...state.user, name: state.name, surname: state.surname, username: state.username, password: state.password, mail: state.mail, address: state.address, phone: action.payload },
        }
    }
    
    
    return state;

}
export default reducer;