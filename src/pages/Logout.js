// react
import React from 'react';

// firebase
// import { getAuth as auth, signOut } from "firebase/auth";

import { logUserOut } from '../util/Helpers';

// main function
export default function Logout() {
    // log user out
    logUserOut();

    // redirect to home page
    window.location.href = '/home';

    return (
        <div>
            <h3>Logging you out.</h3>
        </div>
    )
}