// import post fecch from the helpers.js file
import { postFetch, getFetch } from './Helpers.js'

export async function login(email, password) {
    // return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/login/`, { email: email, password: password });
    return await postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/login/`, JSON.stringify({ email: email, password: password }));
}

export function register(email, firstName, lastName, username, password) {
    return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/register/`, JSON.stringify({ email: email, first_name: firstName, last_name: lastName, username: username, password: password, confirmPassword: password }));
}

export async function getUserDetails(token, userid) {
    return await getFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/users/${userid}/`, token);
}

// export async function updateUserDetails(token, userid, firstName, lastName, displayName, email) {
//     return await postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/users/${userid}/`, JSON.stringify({ first_name: firstName, last_name: lastName, username: displayName, email: email }), token);
// }

export async function getUserInventory(token, userid) {
    return await getFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/users/${userid}/inventory/`, token);
}