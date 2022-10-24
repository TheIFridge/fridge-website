import { React, useState, useEffect } from 'react';
import { Button, Form, Card, Row, Col, Container, Spinner, InputGroup } from 'react-bootstrap';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFire, faFlag, faBasketShopping, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { deleteUserInventoryItem, getUserInventory, putUserInventoryItem, getIngredientOptions } from '../util/Functions';

export default function RecipeGeneration() {
	if (!userLoggedIn()) { window.location.href = '/login'; }

	const [loading, setLoading] = useState(false);
	const [inventoryJson, setInventoryJson] = useState({});

	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [items, setItems] = useState({});
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if (!loading) {
			getUserInventory(sessionStorage.getItem("token"), sessionStorage.getItem("userid")).then(async (response) => {
				const data = await response.json();
				setInventoryJson(data);
				setItems(data.ingredients);
				setLoading(true);
			});
		}
	}, [loading, inventoryJson]);

	const handleAddButtonClick = () => {
		if (inputValue === '') {
			return;
		}

		var add = true;
		for (var i = 0; i < items.length; i++) {
			if (String(items[i].ingredient.generic_name).trim().toLowerCase() === String(inputValue.trim()).toLowerCase()) {
				add = false;
				handleQuantityIncrease(i);
				break;
			}
		}

		if (add) {
			const newIngredient = {
				ingredient: {
					identifier: inputValue,
					generic_name: inputValue,
				},
				expiry: Date.now() + 604800000,
				quantity: 1
			}

			putUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), newIngredient);

			const newItems = [...items, newIngredient];
			setItems(newItems);
		}

		return;
	};

	const handleRemoveItem = (index) => {
		const newItems = [...items];
		deleteUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), newItems[index].ingredient.identifier ?? newItems[index].ingredient);
		setItems((items) => items.filter((_, i) => i !== index))
	}

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		putUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), {
			ingredient: {
				identifier: newItems[index].ingredient.identifier ?? newItems[index].ingredient
			},
			quantity: newItems[index].quantity,
			expiry: newItems[index].expiry
		});
		setItems(newItems);
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		const filteredItems = newItems.filter((item) => item.quantity > 0);

		if (newItems[index].quantity <= 0) {
			deleteUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), newItems[index].ingredient.identifier ?? newItems[index].ingredient);
		} else {
			putUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), {
				ingredient: {
					identifier: newItems[index].ingredient.identifier ?? newItems[index].ingredient
				},
				quantity: newItems[index].quantity,
				expiry: newItems[index].expiry
			});
		}

		setItems(filteredItems);
	};

	const getOptions = (ingredientName) => {
		setIsLoading(true);
		setInputValue(ingredientName);
		getIngredientOptions(ingredientName)
			.then((resp) => resp.json())
			.then((data) => {
				setOptions(data.map((data) => data.name));
				setIsLoading(false);
			});
	}

	return (
		<div id="inventory" style={{ width: '100%', justifyContent: 'center' }}>
			<div><h1>Recipe Generation</h1></div>
			<div className='app-background'>
				<div className='main-container'>
					<div className='item-list'>
						<Container>
							<Row >
								{!loading && <><Spinner animation="border" variant="primary" style={{ margin: 'auto' }} /></>}
								{loading && items.map((userIngredient, index) => (
									<Col key={index} xs={12} md={4}>
										<Card style={{ width: '100%', height: '90%' }}>
											<Card.Header>
												<Button variant="dark" onClick={() => handleRemoveItem(index)} style={{ float: 'right' }}> x </Button>
												<h3 style={{ float: 'left' }}>{userIngredient.quantity}</h3>
												<Button className="me-2" style={{ float: 'right' }} variant="danger" onClick={() => handleQuantityDecrease(index)}>
													<FontAwesomeIcon icon={faFlag} />
												</Button>
											</Card.Header>
											<Card.Img style={{objectFit: 'cover', width: '100%', height: '250px'}} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"/>
											<Card.Body>
												<Card.Title className='mb-3'>{capitalise(userIngredient.ingredient.generic_name ?? userIngredient.ingredient ?? "Unknown")}</Card.Title>
												<Card.Text className='mb-0'>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
												<Card.Text className='mb-0'>Type: </Card.Text>
											</Card.Body>
											<Card.Footer style={{ width: '100%' }}>
												<Row>
													<Col>
														<Button variant="success w-100" onClick={() => handleQuantityIncrease(index)}>+</Button>
													</Col>
													<Col>
														<Button variant="primary w-100" onClick={() => handleQuantityDecrease(index)}>
															<FontAwesomeIcon icon={faShoppingBasket} />
														</Button>
													</Col>
													<Col>
														<Button variant="danger w-100" onClick={() => handleQuantityDecrease(index)}>-</Button>
													</Col>
												</Row>
											</Card.Footer>
										</Card>
										<br />
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