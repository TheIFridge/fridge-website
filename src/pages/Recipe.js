// react

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Recipe(props) {


    return (
        <>
            {/*render diffirent page depending on the button pressesd*/}
            <div className='background'>
                <div>
                    <Row>
                        <Col>
                            {props.preview}
                        </Col>
                        <Col>
                            <h2>{props.title}</h2>
                            <h4>{props.brief}</h4>
                        </Col>
                        <Col>
                            <h6>{props.cookTime}</h6>
                        </Col>
                        <Col>
                            <h6>{props.prepTime}</h6>
                        </Col>
                        <Col>
                            <h6>{props.servings}</h6>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="d-flex gap-2">
                        <Col>
                            <h2>{props.ingredientTitle}</h2>
                            <br></br>
                            {props.ingredientsList}
                            <h2>{props.nutritionTitle}</h2>
                            <p>{props.nutrition}</p>
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

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}