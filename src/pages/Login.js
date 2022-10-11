// react
import {React, useState } from 'react';

// react router
import { Navigate } from 'react-router-dom';

// components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { login } from '../util/Functions.js';

export default function Login() {
	// create state for email, password, and error message
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userMessage, setUserMessage] = useState('');

	if(sessionStorage.getItem("loggedIn") === "true") {
		return <Navigate to="/" />
	}

	// login user
	const handleLogin = e => {
		e.preventDefault();
		if (email !== '' && password !== '') {
			login(email, password).then(async (response) => {
				var valid = false;
				let json = await response.json();
				if(json.token !== undefined) {
					valid = true;
					sessionStorage.setItem("token", json.token);
					sessionStorage.setItem("userid", json.userId);
					sessionStorage.setItem("loggedIn", "true");
					window.location.reload();
				}

				if (!valid) {
					setUserMessage('Invalid email or password');
				} else {
					setUserMessage('');
				}
			});
		} else {
			setUserMessage('Please enter an email and password');
		}
	}

	return (
		<>
			{/* card that is justtified-center and centered */}
			<Card className="justify-content-center mx-auto" style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Login</Card.Title>
					{userMessage && <div style={{color: 'red'}} >{userMessage}</div>}
					<br />
					<Form onSubmit={handleLogin} name='login_form'>
						<InputGroup className="mb-3">
							<Form.Control placeholder="Enter email" required value={email} onChange={e => setEmail(e.target.value)}/>
						</InputGroup>

						<InputGroup className="mb-3">
							<Form.Control placeholder="Enter password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
						</InputGroup>

						<Button variant="primary" type="submit">Login</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
}