import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { capitalise, getPrice } from '../util/Helpers';
import { Spinner } from 'react-bootstrap';

export default function PriceWatch() {
    // create states for searchInput, and searchResults
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        isLoading && getPrice(searchInput).then(async (response) => {
            let data = await response.data;
            setSearchResults(data);
            setIsLoading(false);
        });
    }, [isLoading, searchInput]);

    // when the searchInput changes, update the searchResults
    const handleSearchInput = (e) => {
        console.log("Search input: " + e);
        setIsLoading(true);
    };

    const handleWatchlistAdd = (ingredient, event) => {
        event.target.innerText = "Watching";
    }
    
    const handleShoppingListAdd = (ingredient, event) => {
        //add to to shopping list
    }

    return (
        <div>
            <h1>Price Watch</h1>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            <Button variant="outline-success" onClick={() => {
                handleSearchInput(searchInput);
            }}>Search</Button>
            </Form>
            <br />
            {isLoading && <><Spinner animation="border" variant="primary" style={{margin: 'auto'}} /></>}

            <Row xs={1} md={3} className="g-4">
                {searchResults.map((value, index) => {
                    return (
                        <Col key={index}>
                            <Card style={{ "height": "100%" }}>
                                <Card.Img variant="top" src={value.image} />
                                <Card.Body>
                                    {/* <Card.Title>{capitalise(value.generic_name)}</Card.Title> */}
                                    <Card.Title>{capitalise(value.name)}</Card.Title>
                                    <hr/>
                                    <Card.Text>Countdown: {value.prices.countdown === 0.0 ? "Untracked" : "$" + value.prices.countdown}</Card.Text>
                                    <Card.Text>Farro: {value.prices.farro === 0.0 ? "Untracked" : "$" + value.prices.farro}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={(event) => {handleWatchlistAdd(value, event)}}>Add to Watchlist</Button>
                                    {/* &nbsp; */}
                                    <Button variant="info" onClick={(event) => {handleShoppingListAdd(value, event)}}>Add to shopping list</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}