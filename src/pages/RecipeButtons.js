import React from "react";
import Data from "./Data";

const RecipeButtons = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div>
                {menuItems.map((Val, id) => {
                    return (
                        <button onClick={() => filterItem(Val)} key={id}>{Val}</button>
                    );
                })}
                <button onClick={() => setItem(Data)}>All</button>
            </div>
        </>
    )
}

export default RecipeButtons;