import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

// import Data from './Data';

const RecipeCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div className="container-fluid">
        <motion.div className="row justify-content-center">
          {item.map((Val) => {
            return (
              


              <motion.div onClick={() => setIsOpen(!isOpen)} className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id}>
                <motion.div className="card-img-top text-center">
                  <img src={Val.images} alt={Val.title} className="photo w-75" />
                </motion.div>
                <motion.div className="card-body">
                  <motion.div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </motion.div>
                  <motion.div className="card-text">{Val.desc}</motion.div>
                  {isOpen &&
                    <motion.div>
                      {Val.method}
                    </motion.div>
                  }
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
{/* <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
                  <motion.div className="card-img-top text-center">
                    <motion.img src={Val.images} alt={Val.title} className="photo w-75"></motion.img>
                    <motion.div>
                      <motion.div>
                        {Val.title}
                        <br></br>
                        {Val.price}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {isOpen &&
                    <motion.div>
                      {Val.method}
                    </motion.div>
                  }
                </motion.div> */}