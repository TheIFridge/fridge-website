// react
import React from 'react';

// main function
export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <span className="mb-3 mb-md-0 text-muted">&copy; 2022 iFridge</span>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">A</li>
                    <li className="ms-3">B</li>
                    <li className="ms-3">C</li>
                </ul>
            </footer>
        </div>
    )
}