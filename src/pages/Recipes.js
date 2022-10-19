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
    if (!userLoggedIn()) { window.location.href = '/login'; }

    const [filter, setFilter] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            setMenuItems(Data);
            setLoading(true);
        }
    }, [loading, menuItems, filter]);

    return (
        <>
            <h1>Recipe Filtering</h1>
            <br />
            <Container>
                <Row xs={1} md={4} lg={4}>
                    <Col>
                        <Button variant="success" style={{ width: '90%', height: '90%' }} onClick={() => setFilter('Dairy Free')}>Diary Free</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{ width: '90%', height: '90%' }} onClick={() => setFilter('Gluten Free')}>Gluten Free</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{ width: '90%', height: '90%' }} onClick={() => setFilter('Vegetarian')}>Vegetarian</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{ width: '90%', height: '90%' }} onClick={() => setFilter('')}>No Filter</Button>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row xs={1} md={3} lg={3}>
                    {menuItems.map((item, index) => {
                        // make sure it only shows the items that match the filter
                        if (filter === null || item.category === filter) {
                            return (
                                <Col key={index} md={6} className="mb-5">
                                    <Card>
                                        <Card.Body className="d-flex flex-column">

                                            <Card.Img variant="top" src={item.images} className='image-test' />
                                            <Card.Title className="justify-content-center">{item.title}</Card.Title>
                                            <Card.Text className="justify-content-center">
                                                {item.description}
                                            </Card.Text>
                                            <Card.Footer>
                                                <Button href={item.url} variant="info">Go to recipe</Button>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        } else {
                            return (<></>);
                        }
                    })}
                </Row>
            </Container>
        </>
    )
}