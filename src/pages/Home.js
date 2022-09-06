// react
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// main function
export default function Home() {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <h1>
                            Welcome to the Recipe App
                        </h1>
                    </Col>
                    <Col>
                        <Card border="light" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="img/pages/home/fridge.png" />
                        </Card>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row>
                    <Col>
                        <h1>
                            This is the App
                        </h1>
                    </Col>
                    <Col>
                        <Card bg="light" border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="img/pages/home/fridgeApp.png" />
                        </Card>
                    </Col>
                    <Col>
                        <p>
                            A resposnive web app that allows you to search for recipes based on the ingredients you have in your fridge.
                        </p>
                        <p>
                            The app will also allow you to save your favourite recipes and create your own recipes.
                        </p>
                    </Col>
                </Row>
            </Form>
        </>
    );
}