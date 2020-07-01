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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
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
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(AuthSuccess(res.data));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
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

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));

            if (expirationDate > new Date()) {
                const userId = localStorage.getItem('userId');
                const remainingSeconds = (expirationDate.getTime() - new Date().getTime()) / 1000;
                dispatch(AuthSuccess({ idToken: token, localId: userId }));
                dispatch(checkAuthTimeout(remainingSeconds));
            }
            else {
                dispatch(logout());
            }
        }
    };
};