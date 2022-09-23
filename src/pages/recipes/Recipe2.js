import React from "react";
import Card from "react-bootstrap/Card";



export default function Recipe2() {
    return (
        <>
            <h1>Roasted Lamb</h1>
            <div>
                <img src="https://www.countdown.co.nz/Content/Recipes/227490_Herb-InfusedRoastLamb_small_174x174.jpg"></img>
            </div>

            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 1</Card.Title>
                    <Card.Text>
                        Preheat oven to 200°C. Place lamb in a roasting pan. Combine garlic, rosemary, oil and salt in a bowl. Rub over lamb. Roast for 1 hour 30 minutes for medium or until cooked to your liking.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 2</Card.Title>
                    <Card.Text>
                        Transfer lamb to a plate. Cover with foil. Set aside for 10 minutes to rest.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 3</Card.Title>
                    <Card.Text>
                        Meanwhile, place pan juices in a small saucepan over medium heat. Bring to the boil. 
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 4</Card.Title>
                    <Card.Text>
                        Reduce heat to low. Simmer for 5 minutes or until reduced by half. Season with salt and pepper. Serve with lamb.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 5</Card.Title>
                    <Card.Text>
                        Serve with steamed green beans and mashed potato.
                    </Card.Text>
                </Card.Body>
            </Card>

            
        </>
    );
}