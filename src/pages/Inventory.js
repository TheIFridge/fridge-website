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

import { userLoggedIn, millisecondsToString } from '../util/Helpers';
import { getUserInventory } from '../util/Functions';
// import { ButtonGroup } from 'react-bootstrap';

// main function
export default function Inventory() {
	if (!userLoggedIn()) {window.location.href = '/login';}

	const [loading, setLoading] = useState(false);
	const [inventoryJson, setInventoryJson] = useState({});

	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		// loading && getUserInventory(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
		// 	const data = await response.json();
		// 	setInventoryJson(data.ingredients);
		// 	setLoading(true);
		// 	console.log(data.ingredients);
		// });

		if(!loading) {
			getUserInventory(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
				const data = await response.json();
				setInventoryJson(data.ingredients);
				
				console.log(data.ingredients);
			}).then(() => {
				setItems(inventoryJson.ingredients);
				setLoading(true);
			});
	
			// setItems(inventoryJson.ingredients);

			// setLoading(true);
		}
	}, [loading, inventoryJson]);

	const handleAddButtonClick = () => {
		if(inputValue === '') {
			return;
		}

		var add = true;
		for(var i = 0; i < items.length; i++) {
			if(String(items[i].ingredient.trim()) === String(inputValue.trim())) {
				add = false;
				handleQuantityIncrease(i);
				break;
			}
		}

		if(add) {
			const newItem = {
				ingredient: inputValue,
				expiry: 0,
				quantity: 1,
			};

			const newItems = [...items, newItem];
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
					<div className='add-item-box'>
						<InputGroup className="mb-3">
							<Form.Control value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item'/>
							&nbsp;
							<Button variant="primary" type="submit" onClick={() => handleAddButtonClick()}>Add</Button>
						</InputGroup>
					</div>

					<div className='item-list'>
						<Container>
							<Row >
								{loading && items.map((userIngredient, index) => (
									<Col key={index} xs={12} md={4}>
										<Card style={{ width: '100%', height: '90%' }}>
											{/* <Card.Img variant="top" src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg" /> */}
											<Card.Header>
												<Button variant="dark" onClick={() => handleRemoveItem(index)} style={{float: 'right'}}> x </Button>
											</Card.Header>
											<Card.Body>
												<Card.Title>{userIngredient.ingredient.name}</Card.Title>
												<Card.Text>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
												<span> {userIngredient.quantity}</span>
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
					<div className='total'>Total items: {items.reduce((accum, item) => accum + item.quantity, 0)}</div>
				</div>
			</div>
		</div>
    );
}