import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { Card } from "react-bootstrap";

// import Data from './Data';

const RecipeCard = ({ item }) => {
  const ref = useRef(null);



  //getter that returs the recipe id
  const getRecipeId = event => {
    return event.currentTarget.id;
  }



  return (
    <>
      <motion.div className="container-fluid">
        <motion.div className="row justify-content-center">
          {item.map((Val) => {
            return (
              
                <Card key={Val.id} style={{ width: '18rem' }} className="my-2">
                  <Card.Img variant="top" src={Val.images} />
                  <Card.Body>
                    <Card.Title>{Val.title}</Card.Title>
                    <Card.Text>
                      {Val.desc}
                    </Card.Text>
                    <Button variant="primary" id={Val.id} onClick={getRecipeId} href="/recipes/Recipe1">View Recipe</Button>
                  </Card.Body>
                </Card>
            );
          })}
        </motion.div>
      </motion.div>


    </>
  )
}


export default RecipeCard;
