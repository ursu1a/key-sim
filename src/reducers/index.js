import {combineReducers} from 'redux';
import {app} from "./app";
import {string} from './string';

const rootReducer = combineReducers({
    app,
    string
});

export default rootReducer;