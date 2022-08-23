// react
import React from 'react';

// main function
export default function Home() {
    return (
        <div>
            <img src = {'./img/icons/old/favicon-196x196.png'} alt = "logo" />
            {{/*bender*/}}
            <style jsx>{`
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>


            <h1>Ifridge</h1>

        </div>
    );
}