import { React, useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

import { userLoggedIn, generateRecipes } from '../util/Helpers';
import { getUserInventory } from '../util/Functions';

export default function RecipeGeneration() {
	if (!userLoggedIn()) { window.location.href = '/login'; }

	const [loading, setLoading] = useState(false);
	const [inventoryJson, setInventoryJson] = useState({});

	const [menuItems, setMenuItems] = useState([]);
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!loading) {
			getUserInventory(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
				const data = await response.json();
				setInventoryJson(data);
				setItems(data.ingredients);
				for (const item in data.ingredients) {
					items.push(data.ingredients[item].ingredient.generic_name);
				}

				generateRecipes(items).then((data) => {
					setMenuItems(data.data);
				});

				if(menuItems === undefined || menuItems.length === 0) {
					setMenuItems([]);
				}

				console.log(menuItems);

				setLoading(true);
			});
		}
	}, [loading, inventoryJson, items, menuItems]);

	return (
        <>
            <div>
                <h1>Recipe Generation</h1>
                <br></br>
                <Container>
                    <Row>
						{menuItems.length > 0 ? menuItems.map((item, index) => (
							<Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
								<Card style={{ width: '100%', height: '99%' }} onClick={() => {window.location.href = item.link;}}>
								<Card.Img variant="top" src={item.image} style={{ width: '100%', height: '100%' }} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
								</Card.Body>
								</Card>
							</Col>
						)) : (
							<Col>
								<h3>No recipes found</h3>
							</Col>
						)}
					</Row>
                </Container>
            </div>
        </>
    );
}