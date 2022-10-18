import React from 'react';
import { Card } from 'react-bootstrap';

function Card(props) {
    return (
        <Card style={{ width: '25rem', height: '20rem', margin: '5px'}} key={key}>
            <Card.Img style={{width: 120, height: 80}}variant="top" src={val.image} />
            <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>
            {val.text}
            </Card.Text>
            <Card.Text>
            {val.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="info" /*onClick={ => sput function in}*/>refresh price</Button>
            </Card.Body>
        </Card>
    )
}

export default Card