// react
import React from 'react';

// components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { userLoggedIn } from '../util/Helpers';

// main function
export default function NavigationBar() {
    return (
        <>
            {userLoggedIn() ? (
                <Navbar expand="lg" id="navB" className={sessionStorage.getItem("theme") !== "dark-mode" ? "navbar-light" : "navbar-dark"}>
                    <Container>
                        <Navbar.Brand href="/home">iFridge</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/pricewatch">Price Watch</Nav.Link>
                                <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
                                <Nav.Link href="/inventory">Inventory</Nav.Link>
                                <Nav.Link href="/recipes">Recipes</Nav.Link>
                                <Nav.Link href="/support">Support</Nav.Link>
                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <NavDropdown title="Admin Panel" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">View Reports</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
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
                                <Nav.Link href="/support">Support</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </>
    );
}