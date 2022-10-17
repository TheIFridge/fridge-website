import { React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { InputGroup } from 'react-bootstrap';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
// import InputGroup from 'react-bootstrap/InputGroup';

export default function Support() {

    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(e.target.user_name);
        console.log(form.current);
    
        emailjs.sendForm('service_li8ozfr', 'template_wijoygh', form.current, '2Db5whLZG7lX83Sc7')
          .then((result) => {
              console.log("resX: ", result.text);
          }, (error) => {
              console.error("errX: ", error.text);
          });

          e.target.reset();
    };

    return(
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Support</Card.Title>
                <Form ref={form} onSubmit={sendEmail}>
                    
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter name" name="user_name" value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter email" name="user_email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)}/>
                    </InputGroup>

                    <InputGroup.Text className="mb-3">
                        <Form.Control placeholder="Enter message" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                    </InputGroup.Text>

                    <Button variant="success" type="submit" value="Send">Submit</Button>
                </Form>
            </Card.Body>    
        </Card>
    );
}