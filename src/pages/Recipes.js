// react
import React, { useState, useEffect } from 'react';
import Data from './Data';

import { userLoggedIn } from '../util/Helpers';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Recipes() {
    if (!userLoggedIn()) {window.location.href = '/login';}

    const [filter, setFilter] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    const [loading, setLoading] = useState(false);

    console.log(menuItems);

    useEffect(() => {
        if(!loading) {
            setMenuItems(Data);
            setLoading(true);
        }
    }, [loading, menuItems, filter]);
    
    return (
        <>
            <h1>Recipe Filtering</h1>
            <br/>
            <Container>
                <Row xs={1} md={3} lg={3}>
                    <Col>
                        <Button style={{width: '90%'}} onClick={() => setFilter('Dairy Free')}>Diary Free</Button>
                    </Col>
                    <Col>
                        <Button style={{width: '90%'}} onClick={() => setFilter('Gluten Free')}>Gluten Free</Button>
                    </Col>
                    <Col>
                        <Button style={{width: '90%'}} onClick={() => setFilter('Vegetarian')}>Vegetarian</Button>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <Row xs={1} md={3} lg={3}>
                    {/* make the map return null */}
                    {menuItems.map((item, index) => {
                        // make sure it only shows the items that match the filter
                        if (filter === null || item.category === filter) {
                            return (
                                <Col key={index}>
                                    <Card style={{ width: '100%', height: '100%' }}>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <Button variant="primary">Go to recipe</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }
                    })}
                </Row>
            </Container>
        </>
    )
}