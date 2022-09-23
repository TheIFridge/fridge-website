// import post fecch from the helpers.js file
import { postFetch } from './Helpers.js'

export function login(email, password) {
    // return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/login/`, { email: email, password: password });
    return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/login/`, JSON.stringify({ email: email, password: password }));
}

export function register(email, firstName, lastName, username, password) {
    return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/register/`, JSON.stringify({ email: email, first_name: firstName, last_name: lastName, username: username, password: password, confirmPassword: password }));
}