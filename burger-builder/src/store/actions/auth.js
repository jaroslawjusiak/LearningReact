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
    console.log('[AuthSuccess]', authData);
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: authData.idToken,
        userId: authData.localId
    };
};

export const AuthFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000); //setTimeout uses millisecond, while expirationTime is in seconds
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
                console.log('[authAsync]: auth success', res.data);
                dispatch(AuthSuccess(res.data));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                console.log('[authAsync]: auth error', err);
                dispatch(AuthFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};