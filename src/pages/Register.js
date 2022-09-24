// react
import { React, useState } from 'react';

// react router
import { useNavigate } from 'react-router-dom'

// firebase
// import { firestore } from '../service/firebase';
// import { addDoc, collection } from '@firebase/firestore';
// import { getAuth as auth, createUserWithEmailAndPassword as signup, sendEmailVerification as verify} from "firebase/auth";
// import { useAuthValue} from '../auth/AuthContext'

// components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { register } from '../util/Functions.js';

// main function
export default function Register() {
	// create states for each registration field
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userMessage, setUserMessage] = useState('');
	
	const navigate = useNavigate();
	
	// check if passwords match
	const checkPass = () => {
		let confirmed = true;
		if (password !== '' && confirmPassword !== ''){
			if (password !== confirmPassword) {
				console.log(password + ' ' + confirmPassword);
				confirmed = false;
				setUserMessage('Passwords does not match')
			}
		}
		return confirmed;
	}

	// register user
	const handleRegistration = e => {
		e.preventDefault();
		setUserMessage('');

		if(checkPass()) {
			// Create a new user with email and password using firebase
			register(email, firstName, lastName, firstName + '' + lastName + generateRandom() + '_' + generateRandom(), password).then(async (response) => {
				const data = await response.json();
				console.log(response);
				var valid = false;
				if (response.status === 201) {
					if(data.userToken !== '') {
						valid = true;
						sessionStorage.setItem("token", response.token);
						sessionStorage.setItem("loggedIn", "true");
						navigate('/');
					}
				}

				if (!valid) {
					setUserMessage('Registration failed. Please try again later.');
				}
			});
		}

		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	}
	
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Register</Card.Title>
				{userMessage && <div style={{color: 'red'}} >{userMessage}</div>}
				<br />
				<Form onSubmit={handleRegistration} name='registration_form'>
					<InputGroup className="mb-3">
						{/* <InputGroup.Text>First Name</InputGroup.Text> */}
						<Form.Control placeholder="Enter first name" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
					</InputGroup>

					<InputGroup className="mb-3">
						{/* <InputGroup.Text>Last Name</InputGroup.Text> */}
						<Form.Control placeholder="Enter last name" required value={lastName} onChange={e => setLastName(e.target.value)}/>
					</InputGroup>

					<Form.Group className="mb-3">
						<Form.Control type="email" placeholder="Enter email" required value={email} onChange={e => setEmail(e.target.value)}/>
						<Form.Text className="text-muted">We'll never share your email with anyone</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Enter password" required value={password} onChange={e => setPassword(e.target.value)}/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control type="password" placeholder="Confirm password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
					</Form.Group>

					<Button variant="success" type="submit">Register</Button>
					<br/><br/>
					<span>
						<p>Already have an account?</p>
						<Button variant="info" type="submit" onClick={() => navigate('/login')}>Login</Button>
					</span>
				</Form>
			</Card.Body>
		</Card>
	);
}

function generateRandom(maxLimit = 100){
	let rand = Math.random() * maxLimit;
	console.log(rand); // say 99.81321410836433

	rand = Math.floor(rand); // 99

	return rand;
}