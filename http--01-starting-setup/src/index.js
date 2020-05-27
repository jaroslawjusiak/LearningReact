import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request=>{
    console.log('[Index] interceptor request');
    console.log(request);
    return request;
}, error => {
    // error is catch only for connectivity issues, not bad requests or server errors
    console.log('[Index] interceptor error');
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
    console.log('[Index] interceptor response');
    console.log(response);
    return response;
}, error => {
    // error is catch only for connectivity issues, not bad requests or server errors
    console.log('[Index] interceptor error');
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
