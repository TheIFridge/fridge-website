// import post fecch from the helpers.js file
import { postFetch, getFetch, putFetch, deleteFetch } from './Helpers.js'

export async function getIngredients(token) {
    // // check if token is valid
    // if (token) {
    //     // get the ingredients from the server
    //     const response = await getFetch('/ingredients', token)
    //     // return the ingredients
    //     return response
    // } else {
    //     // redirect to login page
    //     window.location.href = '/login'
    return await getFetch(`${process.env.REACT_APP_PROD_API_URL}/api/ingredients/`, token);
}

export async function login(email, password) {
    // return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/auth/login/`, { email: email, password: password });
    return await postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/auth/login/`, JSON.stringify({ email: email, password: password }));
}

export function register(email, firstName, lastName, username, password) {
    return postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/auth/register/`, JSON.stringify({ email: email, first_name: firstName, last_name: lastName, username: username, password: password, confirmPassword: password }));
}

export async function getUserDetails(token, userid) {
    return await getFetch(`${process.env.REACT_APP_PROD_API_URL}/api/users/${userid}/`, token);
}

// export async function updateUserDetails(token, userid, firstName, lastName, displayName, email) {
//     return await postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/api/users/${userid}/`, JSON.stringify({ first_name: firstName, last_name: lastName, username: displayName, email: email }), token);
// }

export async function getUserInventory(token, userid) {
    return await getFetch(`${process.env.REACT_APP_PROD_API_URL}/api/inventory/`, token);
}

export async function putUserInventoryItem(token, userId, userIngredient) {
    return await putFetch(`${process.env.REACT_APP_PROD_API_URL}/api/inventory/${userIngredient.ingredient.identifier}`, JSON.stringify(userIngredient), token);
}

export async function postUserInventoryItem(token, userId, userIngredient) {
    return await postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/inventory/${userIngredient.ingredient.identifier}`, JSON.stringify(userIngredient), token);
}

export async function deleteUserInventoryItem(token, userId, ingredientId) {
    return await deleteFetch(`${process.env.REACT_APP_PROD_API_URL}/api/inventory/${ingredientId}`, token);
}

export async function getIngredientOptions(ingredientName) {
    return await postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/ingredients/query/`, JSON.stringify({ "name": ingredientName }), sessionStorage.getItem("token"));
}

export async function postShoppingListIngredient(shoppingListId, ingredientId, quantity) {
    return await postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/shoppinglist/${shoppingListId}/${ingredientId}`, JSON.stringify({ "ingredient": ingredientId, "quantity": quantity }), sessionStorage.getItem("token"));
}

export async function getShoppingLists() {
    return await getFetch(`${process.env.REACT_APP_PROD_API_URL}/api/shoppinglist/`, sessionStorage.getItem("token"));
}

export async function deleteShoppingListItem(ingredientId, shoppingListId) {
    return await deleteFetch(`${process.env.REACT_APP_PROD_API_URL}/api/shoppinglist/${shoppingListId}/${ingredientId}`, sessionStorage.getItem("token"));
}

export async function reportUserInventoryItem(ingredientId, flaggedState) {
    return await postFetch(`${process.env.REACT_APP_PROD_API_URL}/api/ingredient/${ingredientId}/report`, JSON.stringify({ "reason": "Unknown", "flagged": flaggedState }), sessionStorage.getItem("token"));
}

export async function getFlaggedIngredients() {
    return await getFetch(`${process.env.REACT_APP_PROD_API_URL}/api/ingredients/reports`, sessionStorage.getItem("token"));
}

export async function getPrice(ingredientId) {
    return await getFetch(`${process.env.REACT_APP_PROD_SCRAPER_URL}/api/ingredient/${ingredientId}`, sessionStorage.getItem("token"));
}