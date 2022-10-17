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
    // title
    // brief
    // ingredientTitle
    // ingredients (provide a ordered list)
    // cook time
    // prep time
    // no. of. people
    // preview
    // method
    // nutrition
    console.log(props.image);
    console.log(props.title);
    console.log(props.brief);
    console.log(props.ingredientTitle);
    console.log(props.ingredientsList);
    console.log(props.cookTime);
    console.log(props.prepTime);
    console.log(props.numberOfPeople);
    // console.log(props.preview);
    console.log(props.method);
    console.log(props.nuitrition);


    return (
        <>
            <div>
                <Row>
                    <Col>
                        {props.image}
                    </Col>
                    <Col>
                        <h1>{props.title}</h1>
                        <h2>{props.brief}</h2>
                    </Col>
                    <Col>
                        <p>{props.cookTime}</p>
                        <p>{props.prepTime}</p>
                        <p>{props.numberOfPeople}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>{props.ingredientTitle}</h2>
                        <ul>
                            {props.ingredientsList.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <h2>{props.nuitrition}</h2>
                        <ul>
                            {props.nuitritionList.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <h2>{props.methodTitle}</h2>
                        <p>{props.method}</p>
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