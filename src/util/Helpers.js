export function getTheme() {
    return sessionStorage.getItem("theme") !== "dark-mode" ? "light-mode" : "dark-mode";
}

export function getDark() {
    return sessionStorage.getItem("theme") === "dark-mode" ? true : false;
}

export function userLoggedIn() {
    // something to check if user is actually logged in, then set the loggedIn state accordingly
    return sessionStorage.getItem("loggedIn") === "true" ? true : false;
}

export function logUserOut() {
    sessionStorage.setItem("loggedIn", "false");
    sessionStorage.setItem("theme", "light-mode");
}

export async function postFetch(endpoint, data, token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (token !== undefined) {
        myHeaders.append("Authorization", `Bearer ${token}`);
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    return await fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));
}

export async function getFetch(endpoint, token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    if (token !== undefined) {
        myHeaders.append("Authorization", `Bearer ${token}`);
    }

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return await fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));
}

export async function putFetch(endpoint, data, token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    if (token) {
        myHeaders.append("Authorization", `Token ${token}`);
    }

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    return fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));
}

