// react
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


// main function
export default function Recepies() {
  return (
    <div>
      <h1>Recipes</h1>
      <p>For all your delicious foods</p>
      {['Time Of Day', 'Meat', 'Allergies','Dairy'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
          </DropdownButton>
        ),
      )}
      <form>
      <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
      </form>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" />
              <Card.Body>
                <Card.Title>Dal</Card.Title>
                <Card.Text>
                  yellow lentils with spices
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg" />
              <Card.Body>
                <Card.Title>Lamb Curry</Card.Title>
                <Card.Text>
                  Curried Lamb With Spices
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br>
      </br>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg" />
              <Card.Body>
                <Card.Title>Paneer</Card.Title>
                <Card.Text>
                  Curried Paneer
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg" />
              <Card.Body>
                <Card.Title>Kofta</Card.Title>
                <Card.Text>
                  stewed Kofta
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br>
      </br>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg" />
              <Card.Body>
                <Card.Title>Kofta</Card.Title>
                <Card.Text>
                  stewed Kofta
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg" />
              <Card.Body>
                <Card.Title>Lamb Curry</Card.Title>
                <Card.Text>
                  Curried Lamb With Spices
                </Card.Text>
                <Link to='/Recipe'>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}



