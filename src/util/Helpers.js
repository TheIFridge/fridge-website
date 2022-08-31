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