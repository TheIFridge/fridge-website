import { React, useState, useEffect } from 'react';
import { Button, Form, Card, Row, Col, Container, Spinner, InputGroup, Image } from 'react-bootstrap';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFire, faFlag, faBasketShopping, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { deleteUserInventoryItem, getUserInventory, putUserInventoryItem, getIngredientOptions, postShoppingListIngredient, reportUserInventoryItem } from '../util/Functions';

// main function
export default function Inventory() {
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

	const addToShoppingList = (ingredientId, quantity) => {
		postShoppingListIngredient("Shopping List", ingredientId, quantity);
	}

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

	const flagIngredient = (ingredientId, flag) => {
		reportUserInventoryItem(ingredientId, flag)
	}

	const getOptions = (ingredientName) => {
		setIsLoading(true);
		getIngredientOptions(ingredientName)
			.then((resp) => resp.json())
			.then((data) => {
				setOptions(data.map((data) => data.name));
				setIsLoading(false);
			});
	}

	const getImage = (userIngredient) => {
		if (userIngredient.ingredient.images && userIngredient.ingredient.images.length > 0) {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src={userIngredient.ingredient.images[0]} />
		} else {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" />
		}
	}

	const getFlaggedButton = (userIngredient) => {
		if (userIngredient.ingredient.flagged.flagged) {
			return (
				<Button className="me-2" style={{ float: 'right' }} variant="secondary" onClick={() => flagIngredient(userIngredient.ingredient.identifier, false)}>
					Flagged
				</Button>
			)
		} else {
			return (
				<Button className="me-2" style={{ float: 'right' }} variant="danger" onClick={() => flagIngredient(userIngredient.ingredient.identifier, true)}>
					<FontAwesomeIcon icon={faFlag} />
				</Button>
			)
		}

	}

	return (
		<div id="inventory" style={{ width: '100%', justifyContent: 'center' }}>
			<div><h1>Inventory</h1></div>
			<div className='app-background'>
				<div className='main-container'>
					<br />
					<Form.Group>
						<InputGroup>
							<InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
							<AsyncTypeahead
								className="form-control"
								id="form-example"
								labelKey="name"
								options={options}
								isLoading={isLoading}
								onChange={(input) => setInputValue(input[0])}
								onSearch={getOptions}
							/>
							<Button variant="secondary"
								type="submit"
								onClick={() => handleAddButtonClick()}
							>Add</Button>
							<Button
								variant="primary"
								type="submit"
								href="/recipeGeneration"
							><FontAwesomeIcon icon={faFire} /> Generate Recipes</Button>
						</InputGroup>
					</Form.Group>

					<br />

					<div className='item-list'>
						<Container>
							<Row >
								{!loading && <><Spinner animation="border" variant="primary" style={{ margin: 'auto' }} /></>}
								{loading && items.map((userIngredient, index) => (
									<Col key={index} xs={12} md={4}>
										<Card>
											<Card.Header>
												<Button variant="dark" onClick={() => handleRemoveItem(index)} style={{ float: 'right' }}> x </Button>
												<h3 style={{ float: 'left' }}>{userIngredient.quantity}</h3>
												{getFlaggedButton(userIngredient)}
											</Card.Header>
											{getImage(userIngredient)}
											<Card.Body>
												<Card.Title className='mb-0'>{capitalise(userIngredient.ingredient.generic_name ?? userIngredient.ingredient ?? "Unknown")}</Card.Title>
												<Card.Text className='mb-3'>{userIngredient.ingredient.description ?? "Unknown Description"}</Card.Text>
												<Card.Text className='mb-0'>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
											</Card.Body>
											<Card.Footer style={{ width: '100%' }}>
												<Row>
													<Col>
														<Button variant="success w-100" onClick={() => handleQuantityIncrease(index)}>+</Button>
													</Col>
													<Col>
														<Button variant="primary w-100" onClick={() => addToShoppingList(userIngredient.ingredient.identifier, userIngredient.quantity)}>
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