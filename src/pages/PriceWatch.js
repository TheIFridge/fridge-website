import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export default function PriceWatch() {
  

    const cardInfo = [
        {image: "https://upload.wikimedia.org/wikipedia/commons/9/92/95apple.jpeg", title: "apple", text: "apples", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/440px-Banana-Single.jpg", title: "banana", text: "bananas", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/500px-Fresh_made_bread_05.jpg", title: "bread", text: "bread", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/440px-Oranges_-_whole-halved-segment.jpg", title: "orange", text: "oranges", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg", title: "pear", text: "pears", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Abhar-iran.JPG/340px-Abhar-iran.JPG", title: "grapes", text: "grapes", price: "$2.50"},
        {image: "https://assets.woolworths.com.au/images/2010/146108.jpg?impolicy=wowcdxwbjbx&w=900&h=900", title: "pineapple", text: "pineapple", price: "$2.50"},
        {image: "https://meadowfresh.co.nz/assets/Products/Milk-2L/MF_2L_ORIGINAL__FillWzYwMCw2MDBd.png", title: "milk", text: "milk", price: "$2.50"},
        {image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/7._carton_of_eggs-9436ea8.jpg?quality=90&fit=700,350", title: "eggs", text: "eggs", price: "$2.50"},
    ];

    const [searchTerm, setSearchTerm] = useState("");
        

    return <div className="App">
        <InputGroup className="mb-3">
			<Form.Control type="searchItem" placeholder="Enter item to search"/>
            &nbsp;
            <Button variant="secondary" onClick={(event) => {setSearchTerm(event.target.value);}} >
            Search
            </Button>
        </InputGroup>

        {cardInfo.filter((val) => {
            if (searchTerm === "") { 
                return val
            } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } return false;
        }).map((val, key) => {
            return (
                <Col xs={12} md={4}>
                <Row>
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
                </Row>
            </Col>
            )
        })}

    </div>
    
}