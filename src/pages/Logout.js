// react
import React from 'react';

// firebase
import { getAuth as auth, signOut } from "firebase/auth";

// main function
export default function Logout() {
    signOut(auth()).then(() => {
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