// react

import React from 'react';
import { Button, Card, Dropdown, Row, Col, Container, Form } from 'react-bootstrap';

export default function Recipe(props) {


    return (
        <>
            {/*render diffirent page depending on the button pressesd*/}
            <div>
                <div>
                    <Row>
                        <Col>
                            <img src='img/pages/home/chicken.png' alt="chicken" className='food-img' style={{width:'100%', height:'auto'}} ></img>
                            {props.preview}
                        </Col>
                        <Col>
                            <h2>{props.title}</h2>
                            <h4>{props.brief}</h4>
                        </Col>
                        <Col>
                            <br></br>
                            <img src='img/pages/home/prepingTime.png' alt='prepTime'></img>
                            <h6>{props.cookTime}</h6>
                        </Col>
                        <Col>
                            <br></br>
                            <img src='img/pages/home/cookTime.png' alt='cookTime'></img>
                            <h6>{props.prepTime}</h6>
                        </Col>
                        <Col>
                            <br></br>
                            <img src='img/pages/home/servings.png' alt='serving'></img>
                            <h6>{props.servings}</h6>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="d-flex gap-2">
                        <Col>
                            <h3>{props.ingredientTitle}</h3>
                            <p>chicken thigh <br></br>soy sauce<br></br> mirin<br></br> sake <br></br>sugar<br></br> salt pepper <br></br>corn starch<br></br> oil</p>
                            <h3>{props.nutritionTitle}</h3>
                            <p>calories: 300<br></br> carbs: 20g<br></br> protein: 30g</p>
                        </Col>
                        <Col>
                            <h3>{props.methodTitle}</h3>
                            <h6>Step 1</h6>
                            <p>marinate the chicken</p>
                            <h6>Step 2</h6>
                            <p>prep the cornflour and egg batter</p>
                            <h6>Step 3</h6>
                            <p>fry the chicken for 7 mins</p>
                            <h6>Step 4</h6>
                            <p>cook the rice and make salad</p>
                            <h6>Step 5</h6>
                            <p>serve</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}