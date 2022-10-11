import { React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { InputGroup } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';

export default function Support() {

    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSupport = e => {
        e.preventDefault();
        
    }

    return(

        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Support</Card.Title>
                <Form onSubmit={handleSupport} name='supportTicket'>
                    
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter name" required value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter email" required value={email} onChange={e => setEmail(e.target.value)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter subject" required value={subject} onChange={e => setSubject(e.target.value)}/>
                    </InputGroup>

                    <InputGroup.Text className="mb-3">
                        <Form.Control placeholder="Enter message" required value={message} onChange={e => setMessage(e.target.value)}/>
                    </InputGroup.Text>

                    <Button variant="success" type="submit">Submit</Button>

                </Form>
            </Card.Body>    
        </Card>
        
    );
}