// react
import { React, useState } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { ThemeContext, themes } from '../context/ThemeContext';

// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from 'react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'

// import { useAuthValue } from '../auth/AuthContext'

// main function
export default function Settings() {
	// setup current user
	// const {currentUser} = useAuthValue();

	// create states for each registration field
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	// const [userMessage, setUserMessage] = useState('');

	const [darkMode, setDarkMode] = useState(true);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
	}
	
	return (
	<div>
		<h1 className="page-title">Settings</h1>
		<br />
		{/* {userMessage && <div style={{color: 'red'}} >{userMessage}</div>} */}

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
						<InputGroup className="mb-4">
						<Form.Label>Email</Form.Label>&nbsp;
						</InputGroup>
					</Col>
					<Col xs={12} md={8}>
						<InputGroup className="mb-4">
						<Form.Control placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)}/>
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
						<ThemeContext.Consumer>
							{({ changeTheme }) => (
							<Button variant="secondary" onClick={() => {
							changeTheme(darkMode ? themes.dark : themes.light);
							setDarkMode(!darkMode);
							}}><FontAwesomeIcon icon={darkMode ? faMoon : faSun} />&nbsp;{darkMode ? "Enable" : "Disable"} Dark Mode</Button>
							)}
						</ThemeContext.Consumer>
					</Col>
					<Col xs={12} md={4} className="mb-4">
						<Button variant="danger" onClick={() => {
						console.log("saved!");
						}}><FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Reset Password</Button>
					</Col>
					<Col xs={12} md={4} className="mb-4">
						<Button variant="success" onClick={() => {
						console.log("saved!");
						}}><FontAwesomeIcon icon={faCircleCheck} />&nbsp;&nbsp;Save Changes</Button>
					</Col>
				</Row>
				<br />
			</Container>
			<br />
		</Form>
	</div>
	)
}