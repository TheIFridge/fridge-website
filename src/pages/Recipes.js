// react
import React, { useState, useEffect } from 'react';
import Data from './Data';

import { userLoggedIn } from '../util/Helpers';

import { Button, Card, Dropdown, Row, Col, Container, Form, ButtonGroup } from 'react-bootstrap';


export default function Recipes() {
    //checks if user is logged in
    if (!userLoggedIn()) { window.location.href = '/login'; }
    const [filter, setFilter] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(false);


    //filters the recipes based on the filter
    useEffect(() => {
        if (!loading) {
            setMenuItems(Data);
            setLoading(true);
        }
    }, [loading, menuItems, filter]);




    return (
        <>
            <div>
                <h1>Recipes</h1>
                <div className='gap-2'>
                    <Form >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search">
                        </Form.Control>
                    </Form>
                </div>
                <br></br>
                <div className='gap-2'>
                    <Row >
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Allergies
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {loading && [... new Set(menuItems.flatMap((data) => data.category))].map((item) => (
                                        <Dropdown.Item variant="success" style={{ width: '90%', height: '90%' }} key={item} onClick={() => setFilter(item)}>{item}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dietary
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {loading && [... new Set(menuItems.flatMap((data) => data.cuisine))].map((item) => (
                                        <Dropdown.Item variant="success" style={{ width: '90%', height: '90%' }} key={item} onClick={() => setFilter(item)}>{item}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Cuisine
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {loading && [... new Set(menuItems.flatMap((data) => data.type))].map((item) => (
                                        <Dropdown.Item variant="success" style={{ width: '90%', height: '90%' }} key={item} onClick={() => setFilter(item)}>{item}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button variant="success" onClick={() => setFilter(null)}>Reset</Button>
                        </Col>
                    </Row>
                </div>
                <br></br>
                    {menuItems.map((item, index) => {
                        if (filter === null || item.category === filter || item.cuisine === filter) {
                            return (
                                <div>
                                <Container>
                                    <Row>
                                        <Col key={index} xs={12} md={4} >
                                            <Card style={{ width: '100%', height: '96%' }} >
                                                <Card.Img variant="top" src={item.images} />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {item.description}
                                                    </Card.Text>
                                                    <Button variant="primary" href={item.url}>Go to recipe</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                </div>
                            );
                        } else {
                            return (<></>);
                        }
                    })}
            </div>
        </>
    )
}


