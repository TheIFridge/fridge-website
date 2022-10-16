// react
import React, { useState, useContext, useEffect } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { ThemeContext, themes } from '../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { getDark, userLoggedIn } from '../util/Helpers';
import { getUserDetails } from '../util/Functions';

import Spinner from 'react-bootstrap/Spinner'

// main function
export default function Settings() {
	if (!userLoggedIn()) {window.location.href = '/login';}

	const { changeTheme } = useContext(ThemeContext);
	const [darkMode, setDarkMode] = useState(getDark());
	const updateDarkMode = () => {
		setDarkMode(!darkMode);
		changeTheme(darkMode ? themes.light : themes.dark);
	}

	// get userjson
	const [loading, setLoading] = useState(false);
	const [userJson, setUserJson] = useState({});

	// create states for each registration field
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');

	// react on page load
	useEffect(() => {
		
		!loading && getUserDetails(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
			const data = await response.json();
			setUserJson(data);
			setLoading(true);
		});

		if(loading) {
			setFirstName(userJson.first_name);
			setLastName(userJson.last_name);
			setDisplayName(userJson.username);
			setEmail(userJson.email);
		}
	}, [loading, userJson]);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
	}

	// TODO:
	// - add validation
	// - add error handling
	// - add login, logout, password change, and account deletion
	// - support, feedback, contact us, FAQ
	// - share this app
	// - add a privacy policy
	// - add a terms of service
	// - add a disclaimer
	// - add way to manage subscription
	
	return (
	<div>
		<h1 className="page-title">Settings</h1>
		<br />
		{!loading && <><Spinner animation="border" variant="primary" style={{margin: 'auto'}} /></>}
		<Form onSubmit={handleSubmit}>
			<Container>
				<Row>
					<Col xs={12} md={4} className="mb-4">
						<Form.Label>Name</Form.Label>&nbsp;
					</Col>

					<Col xs={12} md={4}>
						<InputGroup className="mb-4">
							<Form.Control placeholder="First name" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
						</InputGroup>
					</Col>
					
					<Col xs={12} md={4}>
						<InputGroup className="mb-4">
							<Form.Control placeholder="Last name" required value={lastName} onChange={e => setLastName(e.target.value)}/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col xs={12} md={4}>
						<InputGroup className="mb-4">
							<Form.Label>Display Name</Form.Label>&nbsp;
						</InputGroup>
					</Col>
					<Col xs={12} md={8}>
						<InputGroup className="mb-4">
							<Form.Control placeholder="Display name" required value={displayName} onChange={e => setDisplayName(e.target.value)}/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col xs={12} md={4}>
						{/* disable this field */}
						<InputGroup className="mb-4">
						<Form.Label>Email</Form.Label>&nbsp;
						</InputGroup>
					</Col>
					<Col xs={12} md={8}>
						<InputGroup className="mb-4">
						<Form.Control placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} disabled/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col xs={12} md={4}>
						<InputGroup className="mb-4" style={{textAlign: 'right'}}>
						<Form.Label>Stores</Form.Label>&nbsp;
						</InputGroup>
					</Col>
					<Col xs={12} md={8}>
						<InputGroup className="mb-4">
							<Form.Select aria-label="Default select example">
								<option value="1">Multi-Store</option>
								<option value="2">Countdown</option>
								<option value="3">Pak'N'Save</option>
								<option value="4">New World</option>
							</Form.Select>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col xs={12} md={4} className="mb-4">
						<Button variant="secondary" onClick={updateDarkMode}><FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />&nbsp;{!darkMode ? "Enable" : "Disable"} Dark Mode</Button>
					</Col>
					<Col xs={12} md={4} className="mb-4">
						<Button variant="danger" onClick={() => {
						console.log("password reset - todo!");
						}}><FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Reset Password</Button>
					</Col>
					<Col xs={12} md={4} className="mb-4">
						<Button variant="success" onClick={() => {
						console.log("saved!");
						}}><FontAwesomeIcon icon={faCircleCheck} />&nbsp;&nbsp;Save Changes</Button>
					</Col>
					<Col xs={12} md={12} className="mb-4">
						<Button variant="info" onClick={() => {
						window.location.href = "/terms";
						}}><FontAwesomeIcon icon={faInfoCircle} />&nbsp;&nbsp;Terms</Button>
					</Col>
				</Row>
				<br />
			</Container>
			<br />
		</Form>
	</div>
	)
}