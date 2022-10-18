// react
import React, { useState, useEffect } from 'react';
import Data from './Data';

import { userLoggedIn } from '../util/Helpers';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Recipe(props) {


    return (
        <>
            <div className='background'>
                <Row className="d-flex gap-2">
                    <Col className='imageMain'>
                        {props.image}
                    </Col>
                    <div className='titleAndBrief'>
                        <Col >
                            <h1>{props.title}</h1>
                            <h2>{props.brief}</h2>
                        </Col>
                    </div>
                    <Col>
                        <p>{props.cookTime}</p>
                    </Col>
                    <Col>
                        <p>{props.prepTime}</p>
                    </Col>
                    <Col>
                        <p>{props.numberOfPeople}</p>
                    </Col>
                </Row>
                <Row className="d-flex gap-2">
                    <Col>
                        {props.ingredientTitle}
                        <br></br>
                        {props.ingredientsList}
                    </Col>
                    <Col>
                        <h2>{props.methodTitle}</h2>
                        <p>{props.method}</p>
                    </Col>
                </Row>
                <Row className="d-flex gap-2">
                    <Col>
                        <h2>{props.nutritionTitle}</h2>
                        <p>{props.nutrition}</p>
                    </Col>
                </Row>
            </div>
        </>
    )


    // if (!userLoggedIn()) {window.location.href = '/login';}

    // // const [filter, setFilter] = useState(null);
    // // const [menuItems, setMenuItems] = useState([]);
    // // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if(!loading) {
    //         setMenuItems(Data);
    //         setLoading(true);
    //     }
    // }, [loading, menuItems, filter]);

    // return (
    //     <>
    //         <h1>Recipe Filtering</h1>
    //         <br/>
    //         <Container>
    //             <Row xs={1} md={4} lg={4}>
    //                 <Col>
    //                     <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Dairy Free')}>Diary Free</Button>
    //                 </Col>
    //                 <Col>
    //                     <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Gluten Free')}>Gluten Free</Button>
    //                 </Col>
    //                 <Col>
    //                     <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('Vegetarian')}>Vegetarian</Button>
    //                 </Col>
    //                 <Col>
    //                     <Button variant="success" style={{width: '90%', height: '90%'}} onClick={() => setFilter('')}>No Filter</Button>
    //                 </Col>
    //             </Row>
    //         </Container>
    //         <br/>
    //         <Container>
    //             <Row xs={1} md={3} lg={3}>
    //                 {menuItems.map((item, index) => {
    //                     // make sure it only shows the items that match the filter
    //                     if (filter === null || item.category === filter) {
    //                         return (
    //                             <Col key={index}>
    //                                 <Card style={{ width: '100%', height: '90%' }}>
    //                                     <Card.Img variant="top" src={item.image} />
    //                                     <Card.Body>
    //                                         <Card.Title>{item.title}</Card.Title>
    //                                         <Card.Text>
    //                                             {item.description}
    //                                         </Card.Text>
    //                                         <a href={item.url}><Button variant="info">Go to recipe</Button></a>
    //                                     </Card.Body>
    //                                 </Card>
    //                             </Col>
    //                         );
    //                     } else {
    //                         return (<></>);
    //                     }
    //                 })}
    //             </Row>
    //         </Container>
    //     </>
    // )
}