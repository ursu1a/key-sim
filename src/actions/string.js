import * as actionTypes from '../constants/actionTypes';

export function reduceString() {
    return {type: actionTypes.REDUCE_STRING};
}

export function markError() {
    return {type: actionTypes.MARK_ERROR_CURRENT};
}