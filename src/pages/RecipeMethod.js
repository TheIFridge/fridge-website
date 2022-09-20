import React from "react";

const RecipeMethod = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-centre">
                    <div className="col-md-4 col-sm-6 card my-3 py-3 border-0">
                        <div className="card-img-top text-center">
                            <img src="img/pages/recipeMethod/recipeMethod.png" alt="recipeMethod" className="photo w-75" />
                        </div>
                        <div className="card-body">
                            <div className="card-title fw-bold fs-4">
                                Recipe Method
                            </div>
                            <div className="card-text">
                                <p>
                                    This page will display the recipe method for the recipe you have selected.
                                </p>
                                <p>
                                    The recipe method will be displayed in a list format.
                                </p>
                                <p>
                                    The user will be able to click on the list item to view the recipe method for that step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RecipeMethod;