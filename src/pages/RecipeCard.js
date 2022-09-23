import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

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
        <motion.div className="row justify-content-center">x
          {item.map((Val) => {
            return (
              <motion.div className="col-sm-4 row-sm-6 card my-3 py-3 border-1 me-1 18rem" key={Val.id}>
                <motion.div className="card-img-top text-center">
                  <img src={Val.images} alt={Val.title} className="photo w-75" />
                </motion.div>
                <motion.div className="card-body">
                  <motion.div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </motion.div>
                  <motion.div className="card-text">{Val.desc}</motion.div>


                  {/*map a button to an id */}
                  
                    <motion.div>
                      {/* give the button an id */}
                      <Button ref={ref} id = {Val.id} onClick={getRecipeId} href="/RecipeMethod" >  
                                          
                      </Button>
                    </motion.div>
                  


                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  )
}


export default RecipeCard;
