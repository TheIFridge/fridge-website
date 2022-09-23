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
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Accept-Encoding", "gzip, deflate, br");

    // var raw = JSON.stringify({
    //     "email": "blake@fernandes.co.nz",
    //     "password": "8FSaQwJh#A1G"
    // });

    var requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    return fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    
    // if (token) {
    //     myHeaders.append("Authorization", `Token ${token}`);
    // }

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: data,
    //     redirect: 'follow'
    // };

    // return fetch(endpoint, requestOptions)
    // .then(response => response)
    // .catch(error => console.log('error', error));
}

// export async function postData(identifier, data) {
//     const send = {"identifier": identifier,"data": data};
//     return postFetch(`${process.env.REACT_APP_LOCAL_API_URL}/data/`, JSON.stringify(send))
// }

export async function getFetch(endpoint, data, token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    if (token) {
        myHeaders.append("Authorization", `Token ${token}`);
    }

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    return fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));
    // return fetch(endpoint, {
    //     cache: "default",
    //     method: "GET",
    //     headers: {
    //         headers: {
    //             'Accept': 'application/json',
    //             "Accept-Encoding": "gzip, deflate, br",
    //             'Content-Type': 'application/json',
    //             'Authorization': token ? `Bearer ${token}` : ''
    //         },
    //     },
    //     body: data
    // }).then(response => response.json()).then(data => {
    //     return data;
    // }).catch(error => {
    //     console.log(error);
    // });
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
    // return fetch(endpoint, {
    //     cache: "default",
    //     method: "PUT",
    //     headers: {
    //         headers: {
    //             'Accept': 'application/json',
    //             "Accept-Encoding": "gzip, deflate, br",
    //             'Content-Type': 'application/json',
    //             'Authorization': token ? `Bearer ${token}` : ''
    //         },
    //     },
    //     body: data
    // }).then(response => response.json()).then(data => {
    //     return data;
    // }).catch(error => {
    //     console.log(error);
    // });
}

