// react
import {React, useState } from 'react';

// react router
import { Navigate } from 'react-router-dom';

// firebase
import { getAuth as auth, signInWithEmailAndPassword as login } from "firebase/auth";
import {useAuthValue} from '../auth/AuthContext'

// components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Login() {
	// get current user from context
	const {currentUser} = useAuthValue();

	// create state for email, password, and error message
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userMessage, setUserMessage] = useState('');

	// redirect to home if user is logged in
	if (currentUser !== null) {
		return <Navigate to="/"/>
	}

	// login user
	const handleLogin = e => {
		e.preventDefault();
		if (email !== '' && password !== '') {
			login(auth(), email, password)
				.then(() => {
					console.log('logged in');
					window.location.href = "/";
				}).catch(error => {
					if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
						setUserMessage("Invalid email or password");
					} else {
						setUserMessage(error.message);
					}
				}
			);
		} else {
			setUserMessage('Please fill in all fields');
		}
	}

	return (
		<Card style={{ width: '18rem' }}>
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

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}