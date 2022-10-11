import React from "react";
import { useRef } from "react";
import RecipeCard from "./RecipeCard";
import Data from "./Data";
import { Button } from "react-bootstrap";

export default function RecipeMethod() {
    const ref = useRef(null);


    //call the getter to get the id from RecipeCard
    const getRecipeId = () => {
        RecipeCard.getRecipeId();
    }


    return (
        <div>
            <Button  onClick={getRecipeId}>
                Recipe
            </Button>
        </div>
    );
};