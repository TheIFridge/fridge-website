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
                        <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Dairy Free')}>Diary Free</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Gluten Free')}>Gluten Free</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Vegetarian')}>Vegetarian</Button>
                    </Col>
                    <Col>
                        <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter()}>No Filter</Button>
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
                        if (filter === null || item.category === filter) {
                            return (
                                <Col key={index}>
                                    <Card style={{ width: '100%', height: '90%' }}>
                                        <Card.Img variant="top" src={item.image} />
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