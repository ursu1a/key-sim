import * as actionTypes from '../constants/actionTypes';
import {reduceString, markError} from './string';

let timer = null;

export function start() {
    return dispatch => {
        dispatch({type: actionTypes.GENERATE_STRING});
        dispatch({type: actionTypes.START_APP});
        dispatch(timerUpdate());
    }
}

export function timerUpdate() {
    return (dispatch, getState) => {
        const {app: {time_left}} = getState();
        if (time_left === 0) {
            dispatch(stop());
        } else {
            dispatch({type: actionTypes.TIMER_UPDATE});
            timer = setTimeout(() => dispatch(timerUpdate()), 1000);
        }
    }
}

export function reportError() {
    return dispatch => {
        dispatch({type: actionTypes.REPORT_ERROR});
    }
}

export function produce(char) {
    return (dispatch, getState) => {
        const {string: {current}} = getState();
        if (current === char) {
            dispatch(progress());

            const {string: {length: newLength}} = getState();
            if (newLength === 0) {
                dispatch(stop());
            }
        } else {
            dispatch(reportError());
            dispatch(markError());
        }
    }
}

export function progress() {
    return dispatch => {
        dispatch({type: actionTypes.PROGRESS});
        dispatch(reduceString());
    }
}

export function repeat() {
    return dispatch => {
        dispatch(start());
    }
}

export function stop() {
    clearInterval(timer);
    return {type: actionTypes.END_APP};
}