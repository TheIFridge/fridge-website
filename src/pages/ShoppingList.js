// react
import React from 'react';

// import { InputGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

// function ShoppingListItem(props) {
//     return (
//         <>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="https://mcdev.io/assets/oreplugin.png" />
//                 <Card.Body>
//                         <Row>
//                             <Col xs={6} md={6}>
//                                 <InputGroup className="mb-1">
//                                     <Card.Title>{props.name}</Card.Title>
//                                 </InputGroup>
//                             </Col>
//                             <Col xs={6} md={6}>
//                                 <InputGroup className="mb-1" style={{justifyContent: 'right'}}>
//                                     <Card.Text>x{props.quantity}</Card.Text>
//                                 </InputGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col xs={4} md={4}>
//                                 <InputGroup className="mb-1">
//                                     <Button variant="success" onClick={props.onAdd} style={{width: '100%'}}>+</Button>
//                                 </InputGroup>
//                             </Col>
//                             <Col xs={4} md={4}>
//                                 <InputGroup className="mb-1">
//                                     <Button variant="warning" onClick={props.onRemove} style={{width: '100%'}}>-</Button>
//                                 </InputGroup>
//                             </Col>
//                             <Col xs={4} md={4}>
//                                 <InputGroup className="mb-1">
//                                     <Button variant="danger" onClick={props.onRemove} style={{width: '100%'}}>x</Button>
//                                 </InputGroup>
//                             </Col>
//                         </Row>
//                 </Card.Body>
//             </Card>
//             <br/>
//         </>
//     );
// }

// create component for a shopping list
// function ShoppingListBox(props) {

//     const onRemove = (name) => {
//         console.log("remove " + name);
//     }

//     return (
//         <div className="shopping-list">
//             <Container>
//                 <Row>
//                     {props.items.map((item, idx) => (
//                         <Col xs={12} sm={6}>
//                             <ShoppingListItem name={item.name} quantity={item.quantity} onAdd={props.onAdd} onRemove={onRemove(this)} />
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// create component for an input box using bootstrap buttons
// function InputBox(props) {
//     return (
//         <InputGroup className="mb-3">
//             <input type="text" className="form-control" placeholder={props.placeholder} aria-label={props.title} aria-describedby="basic-addon1" />
//             <Button className="btn btn-outline-secondary" type="button" id="button-addon2">{props.buttonText}</Button>
//         </InputGroup>
//     );
// }


// main function
export default function ShoppingList() {
    return (
        <div>
            <h1>Shopping List</h1>
            <br/>
            <h4>Coming Soon.</h4>
        </div>
    )
    // return (
    //     <div>
    //         <h1>Shopping List</h1>
    //         <br/>
            
    //         <InputBox title="Add Item" placeholder="Item Name" buttonText="Add" />

    //         <ShoppingListBox title="Shopping List" items={[{name: "Milk", quantity: 2}, {name: "Eggs", quantity: 12}, {name: "Bread", quantity: 1}]} onAdd={() => {}} onRemove={() => {}} />
    //     </div>
    // )
}