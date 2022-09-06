// react
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Data from './Data';
import Stack from 'react-bootstrap/Stack';
import '../style/Recipes.css'

function Buttons() {
  // grab the data from the Data.js file
  const data = Data;
  //if the data Category is equal to the button name, then return the data
  const vegetarian = data.filter((item) => item.category === "Vegetarian");
  const nonVegetarian = data.filter((item) => item.category === "Non-Vegetarian");
}


export default function Recepies() {
  return (
    <>
      <div> 
        {/* Buttons */}
        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" size="lg" onClick={Buttons}>
            Vegetarian
          </Button>
          <Button variant="primary" size="lg" onClick={Buttons}>
            Non-Vegetarian
          </Button>
          <Button variant="primary" size="lg" onClick={Buttons}>
            DairyFree
          </Button>
        </Stack>
        <br></br>

        {/* Cards */}
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Chicken-Casserole540.jpg/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/REP_Blue-Cheese-Tart.jpg/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}