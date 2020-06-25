import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const AuthSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_START,
        authData: authData
    };
};

export const AuthFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authAsync = (email, password) => {
    return dispatch => {
        dispatch(authStart());
    };
};