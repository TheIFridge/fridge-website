// react
import React from 'react';

// firebase
import { getAuth as auth, signOut } from "firebase/auth";

import { logUserOut } from '../util/Helpers';

// main function
export default function Logout() {
    signOut(auth()).then(() => {
        logUserOut();
        window.location.href = "/";
    }).catch((error) => {
        console.log(error)
    });

    return (
        <div>
            <h3>Logging you out.</h3>
        </div>
    )
}