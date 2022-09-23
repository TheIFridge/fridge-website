import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function PriceWatch() {
    const cardInfo = [
        {image: "https://upload.wikimedia.org/wikipedia/commons/9/92/95apple.jpeg", title: "Apple", text: "Royal Gala Apples", price: "$2.50/kg"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/440px-Banana-Single.jpg", title: "Banana", text: "Fresh Dole Green Banana", price: "$6.90/kg"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/500px-Fresh_made_bread_05.jpg", title: "Bread", text: "Wholemeal Sandwich Bread", price: "$2.50"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/440px-Oranges_-_whole-halved-segment.jpg", title: "Oranges", text: "Fresh Oranges 6pk", price: "$4.20"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg", title: "Pears", text: "Green Pear", price: "$2.90/2ea"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Abhar-iran.JPG/340px-Abhar-iran.JPG", title: "Grapes", text: "Red Seedless Grapes", price: "$3.60/pk"},
        {image: "https://assets.woolworths.com.au/images/2010/146108.jpg?impolicy=wowcdxwbjbx&w=900&h=900", title: "Pineapple", text: "Pineapple Whole", price: "$4.50/ea"},
        {image: "https://meadowfresh.co.nz/assets/Products/Milk-2L/MF_2L_ORIGINAL__FillWzYwMCw2MDBd.png", title: "Milk", text: "2L Milk Standard", price: "$3.50"},
        {image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/7._carton_of_eggs-9436ea8.jpg?quality=90&fit=700,350", title: "Eggs", text: "12pk Free Range Chicken Eggs", price: "$10.30"},
    ];

    // create states for searchInput, and searchResults
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState(cardInfo);

    // when the searchInput changes, update the searchResults
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        // if the searchInput is empty, set the searchResults to all the cardInfo
        if (event.target.value === "") {
            setSearchResults(cardInfo);
        } else {
            // otherwise, filter the cardInfo to only include the searchInput
            const newFilter = cardInfo.filter((value) => {
                return value.title.toLowerCase().includes(searchInput.toLowerCase());
            });
            setSearchResults(newFilter);
        }
    };

    return (
        <div>
            <h1>Price Watch</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search" onChange={handleSearchInput} />
                </Form.Group>
            </Form>
            <br />
            <Row xs={2} md={3} className="g-4">
                {searchResults.map((value, index) => {
                    return (
                        <Col>
                        {/* make sure card height takes up entire height */}
                            <Card style={{ "height": "100%" }}>
                                {/* <Card.Img variant="top" src={value.image} /> */}
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>{value.text}</Card.Text>
                                    <Card.Text>{value.price}</Card.Text>
                                    {/* <Button variant="primary">Add to Watchlist</Button> */}
                                </Card.Body>
                                <Card.Footer><Button variant="primary">Add to Watchlist</Button></Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}