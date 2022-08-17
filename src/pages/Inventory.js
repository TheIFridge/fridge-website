import React from 'react';
import Button from 'react-bootstrap/Button';

// import ReactTooltip from "react-tooltip";
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

import Table from 'react-bootstrap/Table';

export default function Inventory() {
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingTop: '2rem'
    };

    return (
        <div style={style}>
            <InventoryCard />
        </div>
    )
}

function InventoryCard() {

    return (
        // show tooltip of dietry requirements
        <div id="yourmum" style={{ width: '100%', justifyContent : 'center'}}>
        <div><h1>Inventory{"\n"}</h1></div>
        &nbsp;{"\n"}
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
        // <Card style={{ width: '90%'}}>
        //     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        //     <Card.Body>
        //         <Card.Title style={{}}>Inventory</Card.Title>
        //         &nbsp;{" \n"}
        //         <InputGroup className="mb-3">
        //             <Form.Control placeholder="Inventory Item" aria-label="Inventory Item"/>
        //             <InputGroup.Text style={{ width: '15%', textAlign: 'center', justifyContent: 'center'}} id="basic-addon2" disabled={true}>69</InputGroup.Text>
        //         </InputGroup>
        //     </Card.Body>
        // </Card>
    );
  }