// react
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { userLoggedIn } from '../util/Helpers';

// main function
export default function Home() {
    return (
        <>
            {/* JUMBO TEXT ifridge title */}
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <h1 className="text-center">iFridge</h1>
                </Col>
            </Row>

            <br/>

            {/* JUMBO TEXT ifridge subtitle */}
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <h4 className="text-center">Your Fridge. Your Way.</h4>
                </Col>
            </Row>

            <br/>

            <br/>

            {/* Picture of a Fridge */}
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <img src="img/pages/home/fridgeApp.png" alt="Fridge" className="img-fluid"/>
                </Col>
            </Row>

            <br/>

            <br/>

            {/* Login button - very big*/}
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    {/* conditional to say if user logged in or not */}
                    {userLoggedIn() ? (
                        <Button variant="primary" size="lg" href="/inventory">
                            Add to inventory
                        </Button>
                    ) : (
                        <Button variant="primary" size="lg" href="/login">
                            Login
                        </Button>
                    )}
                </Col>
            </Row>
        </>
    );
}