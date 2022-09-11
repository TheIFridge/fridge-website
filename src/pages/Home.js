// react
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

// main function
export default function Home() {
    return (
        <>
            <Row>
                <Col>
                    <h1 class="header">
                        Welcome to the Fridge App
                    </h1>
                    <img src ="img/pages/home/fridge.png" class = "ImagePosition" width="400" height ="300"></img>
                </Col>
                <Col>
                    <br>
                    </br>
                    <Button href="./Recepies" variant="primary">Recipe</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h1 class="header">
                        Mobile Application
                    </h1>
                    <br class="imagePosition"></br>
                    <img src ="img/pages/home/fridgeApp.png" class = "ImagePosition" width="350" height ="250"></img>
                </Col>
                <Col>
                    <p class = "Body">
                        A resposnive web app that allows you to search for recipes based on the ingredients you have in your fridge.
                    </p>
                    <p class = "Body">
                        The app will also allow you to save your favourite recipes and create your own recipes.
                    </p>
                </Col>
            </Row>
        </>
    );
}