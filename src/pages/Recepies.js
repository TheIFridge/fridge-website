// react
import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


// main function
export default function Recepies() {
  return (
    <div>
      <h1>Recipes</h1>
      <p>For all your delicious foods</p>


      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" />
              <Card.Body>
                <Card.Title>Dal</Card.Title>
                <Card.Text>
                  yellow lentils with spices
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={0} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg" />
              <Card.Body>
                <Card.Title>Lamb</Card.Title>
                <Card.Text>
                  lamb with spices
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}



