import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ime: null,
    prezime: null,
    korIme: null,
    sifra: null,
    email: null,
    adresa: null,
    br_telefona: null,
    user: {}
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)


    if (action.type === actionTypes.INPUT_IME) {
        return {
            ...state,
            ime: action.payload,
            user: { ...state.user, ime: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_PREZIME) {
        return {
            ...state,
            prezime: action.payload,
            user: { ...state.user, ime: state.ime, prezime: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_KOR_IME) {
        return {
            ...state,
            korIme: action.payload,
            user: { ...state.user, ime: state.ime, prezime: state.prezime, korIme: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_SIFRA) {
        return {
            ...state,
            sifra: action.payload,
            user: { ...state.user, ime: state.ime, prezime: state.prezime, korIme: state.korIme, sifra: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_EMAIL) {
        return {
            ...state,
            email: action.payload,
            user: { ...state.user, ime: state.ime, prezime: state.prezime, korIme: state.korIme, sifra: state.sifra, email: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_ADRESA) {
        return {
            ...state,
            adresa: action.payload,
            user: { ...state.user, ime: state.ime, prezime: state.prezime, korIme: state.korIme, sifra: state.sifra, email: state.email, adresa: action.payload },
        }
    }
    if (action.type === actionTypes.INPUT_TELEFON) {
        return {
            ...state,
            br_telefona: action.payload,
            user: { ...state.user, ime: state.ime, prezime: state.prezime, korIme: state.korIme, sifra: state.sifra, email: state.email, adresa: state.adresa, br_telefona: action.payload },
        }
    }
    
    
    return state;

}
export default reducer;