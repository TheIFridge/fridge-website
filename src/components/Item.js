import React from 'react'

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { deleteUserInventoryItem, getUserInventory, putUserInventoryItem } from '../util/Functions';

function Item() {
    return (
        <Col key={index} xs={12} md={4}>
            <Card style={{ width: '100%', height: '90%' }}>
                <Card.Header>
                    <Button variant="dark" onClick={() => handleRemoveItem(index)} style={{ float: 'right' }}> x </Button>
                    <h3 style={{ float: 'left' }}>{userIngredient.quantity}</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{capitalise(userIngredient.ingredient.generic_name ?? userIngredient.ingredient ?? "Unknown")}</Card.Title>
                    <Card.Text>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
                </Card.Body>
                <Card.Footer style={{ width: '100%' }}>
                    <Button style={{ width: '50%' }} variant="success" onClick={() => handleQuantityIncrease(index)}>+</Button>
                    <Button style={{ width: '50%' }} variant="danger" onClick={() => handleQuantityDecrease(index)}>-</Button>
                </Card.Footer>
            </Card>
            <br />
        </Col>
    )
}

export default Item