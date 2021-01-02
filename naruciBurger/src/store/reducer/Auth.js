import * as actionTypes from '../actions/actionTypes';

const initialState = {
    username: null,
    password: null,
    user: {}
}

const reducer = ( state = initialState, action ) => {

    console.log('reducer', action)

    if (action.type === actionTypes.INPUT_USERNAME) {
        return {
            ...state,
            username: action.payload,
            user: { ...state.user, username: action.payload }

        };
    }
    if (action.type === actionTypes.INPUT_PASSWORD) {
        return {
            ...state,
            password: action.payload,
            user: { ...state.user, username: state.username, password: action.payload },
        }
    }
    
    return state;
};

export default reducer;