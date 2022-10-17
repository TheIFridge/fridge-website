import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { getIngredients } from '../util/Functions';
import { capitalise } from '../util/Helpers';
import { Spinner } from 'react-bootstrap';
// import { userLoggedIn } from '../util/Helpers';

export default function PriceWatch() {
    // create states for searchInput, and searchResults
    const [isLoading, setIsLoading] = useState(true);
    const [cardInfo, setCardInfo] = useState({});
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // get ingredients needs to listen to blake api which return ingredients from shop
    // BLAKE PROBLEM : SORT THIS NOW
    useEffect(() => {
        isLoading && getIngredients(sessionStorage.getItem("token")).then(async (response) => {
            const data = await response.json();
            setCardInfo(data);
            setIsLoading(false);
            setSearchResults(data);
        });
    });

    // when the searchInput changes, update the searchResults
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        // if the searchInput is empty, set the searchResults to all the cardInfo
        if (event.target.value === "") {
            if (!isLoading) setSearchResults(cardInfo);
        } else {
            console.log("searching");
            // otherwise, filter the cardInfo to only include the searchInput
            const newFilter = cardInfo.filter((value) => {
                // console.log(value.name.toLowerCase());


                return value.name.toLowerCase().includes(searchInput.toLowerCase()) || value.generic_name.toLowerCase().includes(searchInput.toLowerCase());
            });
            setSearchResults(newFilter);
        }
    };

    const handleWatchlistAdd = (ingredient, event) => {
        event.target.innerText = "Watching";
    }

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
            {isLoading && <><Spinner animation="border" variant="primary" style={{margin: 'auto'}} /></>}

            <Row xs={1} md={3} className="g-4">
                {searchResults.map((value, index) => {
                    return (
                        <Col key={index}>
                            <Card style={{ "height": "100%" }}>
                                {/* <Card.Img variant="top" src={value.image} /> */}
                                <Card.Body>
                                    <Card.Title>{capitalise(value.generic_name)}</Card.Title>
                                    <Card.Text>{capitalise(value.name)}</Card.Text>
                                    <Card.Text>{value.price ?? "Price Untracked"}</Card.Text>
                                    <hr/>
                                    {/* 2 evenly spaced columns with placeholder text in each*/}
                                    <Card.Text>{"Countdown: $0.00"}</Card.Text>
                                    <Card.Text>{"Pak'N'Save: $0.00"}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={(event) => {handleWatchlistAdd(value, event)}}>Add to Watchlist</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}