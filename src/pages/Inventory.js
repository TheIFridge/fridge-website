// react
import { React, useRef } from 'react';

// firebase
import { firestore } from '../service/firebase';
import { addDoc, collection } from '@firebase/firestore';

// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

// main function
export default function Inventory() {
    // get current user from context
    // const {currentUser} = useAuthValue();

    // create item reference
    const itemRef = useRef();

    // setup firestore reference
    const ref = collection(firestore, 'testinv');

    // handle save item
    const handleSave = async (e) => {
        e.preventDefault();
        if(itemRef.current.value !== '') {
            console.log(itemRef.current.value);

            let data = {
                message: itemRef.current.value,
                timestamp: "sometimestamp"
            };

            itemRef.current.value = '';

            try {
                addDoc(ref, data);
            } catch (err) {
                console.log(err);
            }
        } else {
            alert('Please enter an item!');
        }
    };

    return (
        // show tooltip of dietry requirements
        <div id="yourmum" style={{ width: '100%', justifyContent : 'center'}}>
            <div><h1>Inventory</h1></div>

            <br />

            <Form onSubmit={handleSave}>
                <InputGroup size="lg"> 
                    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" ref={itemRef}/>
                    <Button id="inputGroup-sizing-lg" type="submit">+</Button>
                </InputGroup>
            </Form>
            
            <br />
            
            <Table striped bordered hover style={{ width: '80%', margin: 'auto'}}>
                <thead>
                    <tr>
                        <th>Inventory Item</th>
                        <th style={{ width: '30%'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>
                            <Button variant="primary" style={{ width: '100%'}}>+</Button>{' '}
                            <p style={{ width: '40%', margin: 'auto' }}>69</p>{' '}
                            <Button variant="primary" style={{ width: '100%'}}>-</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>
                            <Button variant="primary" style={{ width: '100%'}}>+</Button>{' '}
                            <p style={{ width: '40%', margin: 'auto' }}>12</p>{' '}
                            <Button variant="primary" style={{ width: '100%'}}>-</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>Mayonaise</td>
                        <td>
                            <Button variant="primary" style={{ width: '100%'}}>+</Button>{' '}
                            <p style={{ width: '40%', margin: 'auto' }}>42g</p>{' '}
                            <Button variant="primary" style={{ width: '100%'}}>-</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}