// react
import React, { useState } from 'react';
import Data from '../Data';
import Card from '../RecipeCard';
import Buttons from '../RecipeButtons';
import { motion } from 'framer-motion';


export default function Recipe1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div onClick={() => setIsOpen(!isOpen)} className ="card">
                <motion.h1>Butter Chicken</motion.h1>
                <motion.img src='https://www.countdown.co.nz/Content/Recipes/227490_ButterChicken_small_174x174.jpg'></motion.img>
                {isOpen && 
                    <p>1. Heat oil in a large sauce pan over medium heat</p>
                }
            </motion.div>
            <p>2. Add on ion and cook for 5 minutes or until softened</p>
            <p>3. Add garlic and ginger and cook for 1 minute</p>
            <p>4. Add curry paste and cook for 1 minute</p>
            <p>5. Add chicken and cook for 5 minutes or until browned</p>
            <p>6. Add tomato paste and cook for 1 minute</p>
            <p>7. Add coconut milk and stir to combine</p>
            <p>8. Bring to the boil, reduce heat to low and simmer for 10 minutes or until chicken is cooked through</p>
            <p>9. Stir in sugar and season with salt and pepper</p>
            <p>10. Serve with rice and garnish with coriander</p>
        </>
    );
}