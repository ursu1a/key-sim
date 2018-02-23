import * as actionTypes from '../constants/actionTypes';
import * as DEF from '../constants/defines';

const initialState = {
    appState: DEF.STATE_1,
    errors: 0,
    time_spent: 0,
    time_left: 0
};

export function app(state = initialState, action) {
    switch (action.type) {

        case actionTypes.START_APP:
            return {
                ...state,
                appState: DEF.STATE_2,
                errors: 0,
                time_spent: 0,
                time_left: DEF.TIME_LIMIT
            };

        case actionTypes.PROGRESS:
            return {
                ...state
            };

        case actionTypes.TIMER_UPDATE:
            let nextTimeSpent = state.time_spent + 1;
            return {
                ...state,
                time_spent: nextTimeSpent,
                time_left: DEF.TIME_LIMIT > nextTimeSpent ? DEF.TIME_LIMIT - nextTimeSpent : 0
            };

        case actionTypes.REPORT_ERROR:
            let nextErrors = state.errors+1;
            return {
                ...state,
                errors: nextErrors
            };

        case actionTypes.END_APP:
            return {
                ...state,
                appState: DEF.STATE_3,
                time_left: 0
            };

        default:
            return state;
    }
}