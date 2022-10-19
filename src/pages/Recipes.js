// react
import React, { useState, useEffect } from 'react';
import Data from './Data';

import { userLoggedIn } from '../util/Helpers';

import { Button, Card, Dropdown, Row, Col, Container, Form } from 'react-bootstrap';

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
    
    //render the recipe on a new page
    //depending on the button pressed
    const renderRecipe = (event) => {
        let id = event.target.id;
        if(id === "1"){
            window.location.href = '/dm';
        }

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
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <br></br>
                <div className='gap-2'>
                    <Row >
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Allergies
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {loading && [... new Set(menuItems.flatMap((data) => data.category))].map((item)=>(
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
                <Container>
                    <Row>
                        {menuItems.map((item, index) => {
                            if (filter === null || item.category === filter || item.cuisine === filter) {
                                return (
                                    <Col key={index} xs={12} md={4} >
                                        <Card style={{ width: '100%', height: '99%' }} >
                                            <Card.Img variant="top" src={item.images} style={{ width: '100%', height: '100%' }} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                                <Button onClick={renderRecipe} Id = {item.id}>Recipe</Button>
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

            </div>
        </>
    )
}


