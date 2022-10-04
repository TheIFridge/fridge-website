// react
import React, { useState, useEffect } from 'react';
import Data from './Data';

import { userLoggedIn } from '../util/Helpers';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Recipes() {
    if (!userLoggedIn()) {window.location.href = '/login';}

    const [filter, setFilter] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(false);

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
                <Row xs={1} md={4} lg={4}>
                    <Col>
                     {/* Dairy Free Gluten Free, Vegetarian*/}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Allergies
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Dairy Free')}>Dairy Free</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Gluten Free')}>Gluten Free</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Vegetarian')}>Vegetarian</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter(null)}>Reset</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Food Culture
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('American')}>American</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Chinese')}>Chinese</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('French')}>French</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Indian')}>Indian</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Italian')}>Italian</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Japanese')}>Japanese</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Korean')}>Korean</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Mexican')}>Mexican</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Thai')}>Thai</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter(null)}>Reset</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Type Of Food
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Burger')}>Burger</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Chicken')}>Chicken</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Dessert')}>Dessert</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Pasta')}>Pasta</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Pizza')}>Pizza</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Rice')}>Rice</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Salad')}>Salad</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Sandwich')}>Sandwich</Dropdown.Item>
                                <Dropdown.Item variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter(null)}>Reset</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <Row xs={1} md={3} lg={3}>
                    {menuItems.map((item, index) => {
                        // make sure it only shows the items that match the filter
                        if (filter === null || item.category === filter || item.cuisine === filter) {
                            return (
                                <Col key={index}>
                                    <Card style={{ width: '100%', height: '100%' }}>
                                        <Card.Img variant="top" src={item.images} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <a href={item.url}><Button variant="info">Go to recipe</Button></a>
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