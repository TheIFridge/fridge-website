import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Row,Col } from "react-bootstrap";

// import Data from './Data';

const RecipeCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col>
          {item.map((Val) => {
          return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
                  <motion.h2>{Val.title}</motion.h2>

                  <motion.div>
                    <motion.img src={Val.images} alt={Val.title} className="photo w-75"></motion.img>
                    <motion.div>
                      {Val.title}
                      <br></br>
                      {Val.price}
                    </motion.div>
                  </motion.div>
                  {isOpen &&
                    <motion.div>
                      {Val.method}
                    </motion.div>
                  }

                  {/* <div className="card-img-top text-center">
                  <img src={Val.images} alt={Val.title} className="photo w-75" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div> */}
                </motion.div>
              </div>
            );
          })}
          </Col>
        
        </Row>
        {/* <div className="row justify-content-centre"> */}
          
        {/* </div> */}
      </div>
    </>
  )
}


export default RecipeCard;