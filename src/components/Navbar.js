// react
import React, { useEffect, useRef, useState } from 'react';

// firebase
import { useAuthValue } from "../auth/AuthContext"

// components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// main function
export default function NavigationBar() {
    // get current user from context
    var cacheMiss = useRef(0);
    
    const {currentUser} = useAuthValue();
    var userActive = useState(currentUser !== null);
    useEffect(() => {
        if (currentUser) {
            cacheMiss.current = 0;
        } else {
            cacheMiss.current++;
        }

        if (cacheMiss.current > 3) {
            if (currentUser) {
                userActive(true);
            } else {
                userActive(false);
            }
        }
    }, [currentUser, cacheMiss, userActive]);

    const mut = new MutationObserver(() => {
        // console.log("Updated");
        if (document.getElementById("navB") !== null) {
            if(document.body.classList.contains('dark-mode')) {
                // console.log("dark");
                document.getElementById("navB").classList.remove('navbar-light');
                document.getElementById("navB").classList.add('navbar-dark');
            } else {
                // console.log("light");
                document.getElementById("navB").classList.add('navbar-light');
                document.getElementById("navB").classList.remove('navbar-dark');
            }
        }
    });
    const div = document.body;
    mut.observe(div, {'attributes': true});

    return (
        <>
            {userActive ? (
                <Navbar expand="lg" id="navB">
                    <Container>
                        <Navbar.Brand href="/home">iFridge</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/pricewatch">Price Watch</Nav.Link>
                                <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
                                <Nav.Link href="/inventory">Inventory</Nav.Link>
                                <Nav.Link href="/recepies">Recepies</Nav.Link>
                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/home">iFridge</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/pricewatch">Price Watch</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </>
    );

    // if (currentUser !== null) {
    //     return (
                // <Navbar expand="lg" id="navB">
                //     <Container>
                //         <Navbar.Brand href="/home">iFridge</Navbar.Brand>
                //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                //         <Navbar.Collapse id="basic-navbar-nav">
                //             <Nav className="me-auto">
                //                 <Nav.Link href="/pricewatch">Price Watch</Nav.Link>
                //                 <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
                //                 <Nav.Link href="/inventory">Inventory</Nav.Link>
                //                 <Nav.Link href="/recepies">Recepies</Nav.Link>
                //                 <NavDropdown title="Profile" id="basic-nav-dropdown">
                //                     <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                //                     <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                //                 </NavDropdown>
                //             </Nav>
                //         </Navbar.Collapse>
                //     </Container>
                // </Navbar>
    //     );
    // } else {
    //     return (
                // <Navbar expand="lg">
                //     <Container>
                //         <Navbar.Brand href="/home">iFridge</Navbar.Brand>
                //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                //         <Navbar.Collapse id="basic-navbar-nav">
                //             <Nav className="me-auto">
                //                 <Nav.Link href="/pricewatch">Price Watch</Nav.Link>
                //                 <Nav.Link href="/login">Login</Nav.Link>
                //                 <Nav.Link href="/register">Register</Nav.Link>
                //             </Nav>
                //         </Navbar.Collapse>
                //     </Container>
                // </Navbar>
    //     );
    // }
}