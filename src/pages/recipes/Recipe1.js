// react
import Card from 'react-bootstrap/Card';
import React from 'react';


export default function Recipe1() {

    return (
        <>
            <h1>Butter Chicken</h1>
            <div>
                <img src="https://www.countdown.co.nz/Content/Recipes/227490_ButterChicken_small_174x174.jpg"></img>
            </div>
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title>Step 1</Card.Title>
                    <Card.Text>
                        Heat oil in a large frying pan over medium-high heat.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 2</Card.Title>
                    <Card.Text>
                        Add onion and garlic and cook, stirring, for 2 minutes or until onion softens.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 3</Card.Title>
                    <Card.Text>
                        Add chicken and cook, stirring, for 5 minutes or until chicken is browned.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 4</Card.Title>
                    <Card.Text>
                        Add curry paste and cook, stirring, for 1 minute or until fragrant.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 5</Card.Title>
                    <Card.Text>
                        Add tomatoes, tomato paste, stock and sugar and bring to the boil. Reduce heat to low and simmer, stirring occasionally, for 10 minutes or until sauce thickens.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 6</Card.Title>
                    <Card.Text>
                        Add cream and cook, stirring, for 2 minutes or until heated through.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>

            <Card>
                <Card.Body>
                    <Card.Title>Step 7</Card.Title>
                    <Card.Text>
                        Serve with rice and garnish with coriander.
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    );
}