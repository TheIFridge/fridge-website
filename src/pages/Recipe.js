import React from "react";
import Recepies from "./Recepies";
import Data from "./Data";
import  Card  from "react-bootstrap/Card";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const titles = [1, 2, 4, 5, 6, 7, 8, 9, 10]

export default function Recipe() {

    const [selected, updateSelect] = useState(1)

    const onChange = (e) => updateSelect(Number(e.target.value))

    return (
        <Container className="p-3">
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <select onChange={onChange}>
                {[1, 2, 3, 4, 5, 6].map(num => <option value={num}>{num}</option>)}
            </select>
            {titles.filter(n => n === selected).map(num => (
                <Card>
                    <Card.Body>
                        <Card.Title>{num}</Card.Title>
                        <Card.Text>
                            Text here.
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
            )}
        </Container>
    );

}