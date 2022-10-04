import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

// import Data from './Data';

const RecipeCard = ({ item }) => {







  return (
    <>
      {menuItems.map((item, index) => {
        // make sure it only shows the items that match the filter
        if (filter === null || item.category === filter) {
          return (
            <Col key={index}>
              <Card style={{ width: '100%', height: '90%' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <a href={item.url}><Button variant="info">Go to recipe</Button></a>
                </Card.Body>
              </Card>
            </Col>
          );
        }
      })}
    </>
  )
}


export default RecipeCard;
