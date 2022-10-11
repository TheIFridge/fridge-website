import React from "react";
import { Card } from "react-bootstrap";

export default function RecipeCard() {
    return(
        <>
            <h1>Baked Salmon</h1>
            <Card>
                <Card.Body>
                    <Card.Img style={{width: "10%"}} variant="top" src="https://www.countdown.co.nz/Content/Recipes/REP_751.jpg" />
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 1</Card.Title>
                    <Card.Text>
                        preheat the oven to 200 degrees
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 2</Card.Title>
                    <Card.Text>
                        Place the salmon on a baking tray and bake for 15 minutes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 3</Card.Title>
                    <Card.Text>
                        Pick your broad beans
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 4</Card.Title>
                    <Card.Text>
                        Place the broad beans in a pot of boiling water and boil for 5 minutes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 5</Card.Title>
                    <Card.Text>
                        wash the potatoes.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 6</Card.Title>
                    <Card.Text>
                        Place the potatoes in a pot of boiling water and boil for 10 minutes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 7</Card.Title>
                    <Card.Text>
                        peel the potatoes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 8</Card.Title>
                    <Card.Text>
                        mash the potatoes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 9</Card.Title>
                    <Card.Text>
                        serve the salmon with the broad beans and mashed potatoes
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )


}