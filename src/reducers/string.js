import * as actionTypes from '../constants/actionTypes';
import * as DEF from '../constants/defines';

const initialState = {
    string: null,
    length: null,
    current: null,
    markedErrorCurrent: false
};

export function string(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GENERATE_STRING:
            let gen = generateRandomString(DEF.STRING_LENGTH);
            return {
                ...state,
                string: gen,
                length: gen.length,
                current: gen.length > 0 ? gen[0] : null,
                markedErrorCurrent: false
            };

        case actionTypes.REDUCE_STRING:
            let next = state.length > 0 ? state.string.slice(1) : null;
            return {
                ...state,
                string: next,
                length: next.length,
                current: next.length > 0 ? next[0] : null,
                markedErrorCurrent: false
            };

        case actionTypes.MARK_ERROR_CURRENT:
            return {
                ...state,
                markedErrorCurrent: true
            };

        default:
            return state;
    }
}

function generateRandomString(n) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = letters + numbers;
    let result = '';

    for(let i=0; i<n; i++) {
        let index = Math.floor(Math.random() * symbols.length);
        let char = symbols[index];
        result = result.concat(char);
    }
    return result;
}