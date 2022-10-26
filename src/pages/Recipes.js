// react
import React, { useState, useEffect } from 'react';
// import Data from './Data';

import { userLoggedIn, getRecipes } from '../util/Helpers';

import { Button, Card, Row, Col, Container, Form } from 'react-bootstrap';

export default function Recipes() {
    //checks if user is logged in
    if (!userLoggedIn()) { window.location.href = '/login'; }
    const [filter, setFilter] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //filters the recipes based on the filter
    useEffect(() => {
        if (!loading) {
            getRecipes(filter).then((data) => {
                console.log(data);
                setMenuItems(data.data);
            });
            // setMenuItems([]);
            setLoading(true);
        }
    }, [loading, menuItems, filter]);

    //changes the filter
    const changeFilter = (e) => {
        getRecipes(filter).then((data) => {
            setMenuItems(data.data);
        });
    }
    
     return (
        <>
            <div>
                <h1>Recipes</h1>
                <br></br>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={filter} onChange={e => setFilter(e.target.value)}/>
                    <Button variant="outline-success" onClick={() => {
                        changeFilter();
                    }}>Search</Button>
                </Form>
                <br></br>
                <Container>
                    <Row>
                        {menuItems.map((item, index) => {
                            // if (filter === null || item.category === filter || item.cuisine === filter) {
                                return (
                                    
                                    <Col key={index} xs={12} md={4} >
                                        <Card style={{ width: '100%', height: '99%' }} onClick={() => {
                                            window.location.href = item.link;
                                        }}>
                                            <Card.Img variant="top" src={item.image} style={{ width: '100%', height: '100%' }} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                        })}
                    </Row>

                </Container>

            </div>
        </>
    )
}


