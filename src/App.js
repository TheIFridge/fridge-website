import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ShoppingList from './pages/ShoppingList';
import Inventory from './pages/Inventory';
import PriceWatch from './pages/PriceWatch';
import Settings from './pages/Settings';

import { /*Link,*/ Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="/home">iFridge</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/login">Login</Nav.Link>
								<Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
								<Nav.Link href="/inventory">Inventory</Nav.Link>
								<Nav.Link href="/priceswatch">Price Watch</Nav.Link>
								<NavDropdown title="Profile" id="basic-nav-dropdown">
									<NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
									<NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/home" element={<Home/>} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/logout" element={<Logout/>} />
					<Route exact path="/shoppinglist" element={<ShoppingList/>} />
					<Route exact path="/inventory" element={<Inventory/>} />
					<Route exact path="/priceswatch" element={<PriceWatch/>} />
					<Route exact path="/settings" element={<Settings/>} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;