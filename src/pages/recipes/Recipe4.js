import React from "react";
import { Card } from "react-bootstrap";

export default function Recipe4() {
    return(
        <>
            <h1>Roasted Carrot Salad</h1>
            <div>
                <img src="https://www.countdown.co.nz/Content/Recipes/Roasted-Baby-Carrot-Salad-540.jpg" alt = "image4"></img>
            </div>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 1</Card.Title>
                    <Card.Text>
                        peel the carrots
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 2</Card.Title>
                    <Card.Text>
                        cut the carrots into 2cm pieces
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 3</Card.Title>
                    <Card.Text>
                        place the carrots on a baking tray and drizzle with olive oil
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 4</Card.Title>
                    <Card.Text>
                        roast the carrots for 20 minutes
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 5</Card.Title>
                    <Card.Text>
                        place the carrots in a bowl and add the dressing
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 6</Card.Title>
                    <Card.Text>
                        serve
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </>
    )
}
