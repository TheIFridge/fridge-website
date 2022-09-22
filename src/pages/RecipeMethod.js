import Data from './Data';
import React from "react";
import { Router } from 'react-router-dom';


const RecipeMethod = ({ item }) => {

    item.map((Val) => {
        return (
            <Router>
                {/*depending on the button pressed on the recipe cards it will display a diffirent page*/}
                
                <div>
                    {Val.method}
                </div>
            </Router>

        )

    })
}

export default RecipeMethod;