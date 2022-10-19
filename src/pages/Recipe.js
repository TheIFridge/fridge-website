// react

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Recipe(props) {


    return (
        <>
            <div className='background'>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                    <Row className="d-flex gap-2">
                        <Col>
                            <h2>{props.nutritionTitle}</h2>
                            <p>{props.nutrition}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}