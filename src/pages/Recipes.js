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
                <div>
                    <Form className='d-flex'>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search">
                        </Form.Control>
                    </Form>
                </div>
                <br></br>
                <div>

                    <Row className="d-flex gap-2">
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
                        <br></br>
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
                        <br></br>
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
                        <br></br>
                        <Col>
                            <Button variant="success" onClick={() => setFilter(null)}>Reset</Button>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="d-flex gap-2">
                        {menuItems.map((item, index) => {
                            if (filter === null || item.category === filter || item.cuisine === filter) {
                                return (
                                    <Col key={index}>
                                        <Card style={{ width: '18rem', height: '100%' }}>
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
                            } else {
                                return (<></>);
                            }
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}


