// react
import { React, useState, useEffect } from 'react';

// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { getUserInventory } from '../util/Functions';

// main function
export default function Inventory() {
	if (!userLoggedIn()) {window.location.href = '/login';}

	const [loading, setLoading] = useState(false);
	const [inventoryJson, setInventoryJson] = useState({});

	const [items, setItems] = useState({});
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if(!loading) {
			getUserInventory(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
				const data = await response.json();
				setInventoryJson(data);
				setItems(data.ingredients);
				setLoading(true);
			});
		}
	}, [loading, inventoryJson]);

	const handleAddButtonClick = () => {
		if(inputValue === '') {
			return;
		}

		var add = true;
		for(var i = 0; i < items.length; i++) {
			console.log(items[i].ingredient.generic_name);
			if(String(items[i].ingredient.generic_name).trim().toLowerCase() === String(inputValue.trim()).toLowerCase()) {
				add = false;
				handleQuantityIncrease(i);
				break;
			}
		}

		if(add) {
			const newIngredient = {
				ingredient: {
					generic_name: inputValue,
				},
				expiry: Date.now() + 604800000,
				quantity: 1
			}

			// const newItem = {

			// };

			const newItems = [...items, newIngredient];
			setItems(newItems);
			setInputValue('');
		}

		return;
	};

	const handleRemoveItem = (index) => {
		setItems((items) =>items.filter((_, i) => i !== index))
	}

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		const filteredItems = newItems.filter((item) => item.quantity > 0);

		setItems(filteredItems);
	};

    return (
		<div id="inventory" style={{ width: '100%', justifyContent : 'center'}}>
			<div><h1>Inventory</h1></div>
			<div className='app-background'>
				<div className='main-container'>
					<br />
					<div className='add-item-box'>
						<InputGroup>
							<Form.Control
								value={inputValue}
								placeholder="Add Item..."
								aria-label="Search bar with Add and Clear Buttons"
								onChange={(event) => setInputValue(event.target.value)}
								className='add-item-input'
							/>
							<Button variant="primary"
								type="submit"
								onClick={() => handleAddButtonClick()}
							>Add</Button>
							<Button variant="info"
								type="submit"
								onClick={() => setInputValue('')}
							>Clear</Button>
						</InputGroup>
					</div>

					<br/>

					<div className='item-list'>
						<Container>
							<Row >
								{loading && items.map((userIngredient, index) => (
									<Col key={index} xs={12} md={4}>
										<Card style={{ width: '100%', height: '90%' }}>
											{/* <Card.Img variant="top" src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg" /> */}
											<Card.Header>
												<Button variant="dark" onClick={() => handleRemoveItem(index)} style={{float: 'right'}}> x </Button>
												<h3 style={{float: 'left'}}>{userIngredient.quantity}</h3>
											</Card.Header>
											<Card.Body>
												<Card.Title>{capitalise(userIngredient.ingredient.generic_name)}</Card.Title>
												<Card.Text>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
											</Card.Body>
											<Card.Footer style={{width: '100%'}}>
												<Button style={{width: '50%'}} variant="success" onClick={() => handleQuantityIncrease(index)}>+</Button>
												<Button style={{width: '50%'}} variant="danger" onClick={() => handleQuantityDecrease(index)}>-</Button>
											</Card.Footer>
										</Card>
										<br/>
									</Col>
								))}
							</Row>
						</Container>						
					</div>
				</div>
			</div>
		</div>
    );
}