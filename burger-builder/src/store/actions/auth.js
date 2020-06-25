import * as actionTypes from './actionTypes';
import axios from 'axios';

const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'
const apiKey = 'AIzaSyC6QA9FhhC2VpfKFN1HO4ESKbVVj28_a7M';

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

export const authAsync = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        // sign up url by default
        let url = `${baseUrl}signUp?key=${apiKey}`;
        if (!isSignUp) {
            url = `${baseUrl}signInWithPassword?key=${apiKey}`;
        }

        axios.post(url, authData)
            .then(res => {
                console.log('[authAsync]: signing UP success', res.data);
                dispatch(AuthSuccess(res.data));
            })
            .catch(err => {
                console.log('[authAsync]: signing UP error', err);
                dispatch(AuthFail(err));
            });
    };
};
