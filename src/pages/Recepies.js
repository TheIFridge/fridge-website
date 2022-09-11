// react
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import '../style/Recipes.css'



export default function Recepies() {
  return (
    <>
      <div>
        {/* Cards */}
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/227490_ButterChicken_large_810x570.jpg" />
              <Card.Body>
                <Card.Title>Butter Chicken</Card.Title>
                <Card.Text>
                  You forget about takeaways with this easy and delicious recipe for Butter Chicken! This curry favourite is easy to prepare and ready in 30 minutes.
                </Card.Text>
                <Button  href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/227490_Herb-InfusedRoastLamb_large_810x570.jpg" />
              <Card.Body>
                <Card.Title>Herb-Infused Roast Lamb</Card.Title>
                <Card.Text>
                  But any day is perfect to try this recipe for Herb-Infused Roast Lamb, which is even better when seasoned the night before, to let those flavours really infuse.
                </Card.Text>
                <Button href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Large_751.jpg" />
              <Card.Body>
                <Card.Title>Baked Salmon with Tomato Salsa and Crushed Potatoes</Card.Title>
                <Card.Text>
                  This recipe for Baked Salmon with Tomato Salsa and Crushed Potatoes is a great way to get your omega-3s and is ready in just 30 minutes.
                </Card.Text>
                <Button href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Roasted-Baby-Carrot-Salad-540.jpg" />
              <Card.Body>
                <Card.Title>Roasted Baby Carrot Salad</Card.Title>
                <Card.Text>
                  This Roasted Baby Carrot Salad and is ready in just 30 minutes.
                </Card.Text>
                <Button href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Thai-Beef-and-Sweet-Potato-Curry540.jpg" />
              <Card.Body>
                <Card.Title>Thai Beef Curry</Card.Title>
                <Card.Text>
                  This Thai Beef and Sweet Potato Curry and is ready in just 30 minutes.
                </Card.Text>
                <Button href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/bbq-corn-540.jpg" />
              <Card.Body>
                <Card.Title>BBQ Corn</Card.Title>
                <Card.Text>
                  This BBQ Corn is a great way to get your omega-3s and is ready in just 30 minutes.
                </Card.Text>
                <Button href="./Recipe" variant="primary">Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}