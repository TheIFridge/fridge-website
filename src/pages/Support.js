import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { InputGroup } from 'react-bootstrap';
import { useRef } from 'react';

import { firestore } from '../service/firebase';
import { addDoc, collection } from '@firebase/firestore';

import { userLoggedIn } from '../util/Helpers';
import { getUserDetails } from '../util/Functions';

export default function Support() {
    if (!userLoggedIn()) {window.location.href = '/login';}

    	// get userjson
	const [loading, setLoading] = useState(false);
	const [userJson, setUserJson] = useState({});

    // create states for each support field
	const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

	// react on page load
	useEffect(() => {
		!loading && getUserDetails(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
			const data = await response.json();
			setUserJson(data);
			setLoading(true);
		});

		if(loading) {
			setEmail(userJson.email);
		}
	}, [loading, userJson]);

    const form = useRef();

    const [completed, setCompleted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const ref = collection(firestore, 'mail');

        let data =             {
            to: email,
            message: {
              subject: 'Support ticket recieved regarding: ' + subject,
              html: 'Hey, ' + userJson.first_name + ' ' + userJson.last_name + '. We have recieved your support ticket. We will get back to you as soon as possible. <br><br> Your message: <br>' + message,
            },
        }

        try {
            addDoc(ref, data);
        } catch (err) {
            console.log(err);
        }

        setCompleted(true);
    };

    return(
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Support</Card.Title>
                    {!completed ? (
                        <Form ref={form} onSubmit={sendEmail}>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Enter subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)} data-testid="subjectBox"/>
                            </InputGroup>

                            <InputGroup.Text className="mb-3">
                            <Form.Control placeholder="Enter message" name="message" value={message} onChange={e => setMessage(e.target.value)} data-testid="messageBox"/>
                            </InputGroup.Text>

                            <Button variant="success" type="submit" value="Send" data-testid="submitRequest">Submit</Button>
                        </Form>
                    ): (
                        <h1>Thank you for your message!</h1>
                    )
                }
            </Card.Body>    
        </Card>
    );
}