// react
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

    const renderCard = (card, index) => {

        return (
            <div>
                 <InputGroup className="mb-3">
					<Form.Control/>
                    &nbsp;
                    <Button variant="secondary">
                        Search
                    </Button>
                </InputGroup>
                
            <Col xs={12} md={4}>
                <Row>
                <Card style={{ width: '25rem', height: '20rem', margin: '5px'}} key={index}>
                    <Card.Img style={{width: 120, height: 80}}variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>
                       {card.text}
                      </Card.Text>
                      <Card.Text>
                       {card.price}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                 </Row>
            </Col>
            </div>
          );
    };

    return <div className="App">
        <Row>
        {cardInfo.map(renderCard)}
        </Row>
    </div>
    
}