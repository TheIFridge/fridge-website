import React from "react";
// import Data from './Data';

const RecipeCard = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-centre">
        {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.images} alt={Val.title} className="photo w-75" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
                {/*Button that links to the RecipeMethod page*/}
                <div className="card-footer">
                  <button className="btn btn-dark text-white fw-bold">
                    <a href="./RecipeMethod" className="text-white">
                      View Recipe
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default RecipeCard;