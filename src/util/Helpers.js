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

export function timestampToDateString(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var dateString = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return dateString;
}

export function capitalise(word) {
    if(word === undefined) return word;
    // capitalise the first letter of every word in a string
    return word.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    // return word.charAt(0).toUpperCase() + word.slice(1);
}

export function millisecondsToString(millis) {
    var prefix = millis < 0 ? "in " : "";
    var suffix = millis > 0 ? " ago" : "";
    millis = Math.abs(millis);
    
    var seconds = Math.floor(millis / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var years = Math.floor(days / 365);
    var months = Math.floor(days / 30);
    var weeks = Math.floor(days / 7);

    if (seconds < 60) {
        return prefix + seconds + " seconds" + suffix;
    } else if (minutes < 60) {
        return prefix + minutes + " minutes" + suffix;
    } else if (hours < 24) {
        return prefix + hours + " hours" + suffix;
    } else if (days < 7) {
        return prefix + days + (days === 1 ? " day" : " days") + suffix;
    } else if (weeks < 4) {
        return prefix + weeks + " weeks" + suffix;
    } else if (months < 12) {
        return prefix + months + " months" + suffix;
    } else {
        return prefix + years + " years" + suffix;
    }
}

// export function timestampToTime(timestamp) {
//     // given a timestamp, it should return "2 days ago" or "3 hours ago" or "5 minutes ago", or "in 2 days"
//     var date = new Date(Date.now());

//     var date = new Date(timestamp);
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     var second = date.getSeconds();
//     var timeString = hour + ":" + minute + ":" + second;
//     return timeString;
// }

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
        myHeaders.append("Authorization", `Bearer ${token}`);
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

export async function deleteFetch(endpoint, token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    if (token) {
        myHeaders.append("Authorization", `Bearer ${token}`);
    }

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(endpoint, requestOptions)
    .then(response => response)
    .catch(error => console.log('error', error));
}