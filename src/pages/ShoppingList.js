import { React, useState, useEffect } from 'react';
import { Button, Card, Row, Col, Container, Spinner } from 'react-bootstrap';

// import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { getShoppingLists, deleteShoppingListItem, getPrice } from '../util/Functions';

// main function
export default function ShoppingList() {
	if (!userLoggedIn()) { window.location.href = '/login'; }

	const [loading, setLoading] = useState(false);
	const [shoppingListJson, setShoppingListJson] = useState({});
	const [priceJson, setPriceJson] = useState({});


	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if (!loading) {
			getShoppingLists().then(async (response) => {
				let data = await response.json();
				data.forEach((ingredients, index) => {
					ingredients.ingredients.forEach(async (ingredient, index2) => {
						// ingredient.ingredient.shop	s = getPrice(ingredient.ingredient.identifier);
						data[index].ingredients[index2].shop = await (await getPrice(ingredient.ingredient?.identifier ?? ingredient.ingredient)).json()
						console.log(data[index].ingredients[index2].shop)
					});
				});
				setShoppingListJson(data);
				setLoading(true);
			});
		}
	}, [loading, shoppingListJson]);

	const handleRemoveItem = (ingredientId, shoppingListId) => {
		deleteShoppingListItem(ingredientId, shoppingListId)
		// .then((resp) => resp.json())
		// .then((data) => {
		// 	setShoppingListJson(data);
		// });
	}

	const handleQuantityIncrease = (index) => {
		// const newItems = [...items];
		// newItems[index].quantity++;
		// putUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), {
		// 	ingredient: {
		// 		identifier: newItems[index].ingredient.identifier ?? newItems[index].ingredient
		// 	},
		// 	quantity: newItems[index].quantity,
		// 	expiry: newItems[index].expiry
		// });
		// setItems(newItems);
	};

	const handleQuantityDecrease = (index) => {
		// const newItems = [...items];
		// newItems[index].quantity--;
		// const filteredItems = newItems.filter((item) => item.quantity > 0);

		// if (newItems[index].quantity <= 0) {
		// 	deleteUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), newItems[index].ingredient.identifier ?? newItems[index].ingredient);
		// } else {
		// 	putUserInventoryItem(sessionStorage.getItem("token"), sessionStorage.getItem("userid"), {
		// 		ingredient: {
		// 			identifier: newItems[index].ingredient.identifier ?? newItems[index].ingredient
		// 		},
		// 		quantity: newItems[index].quantity,
		// 		expiry: newItems[index].expiry
		// 	});
		// }

		// setItems(filteredItems);
	};

	const getImage = (userIngredient) => {
		if (userIngredient.ingredient.images && userIngredient.ingredient.images.length > 0) {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src={userIngredient.ingredient.images[0]} />
		} else {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" />
		}
	}

	return (
		<div id="inventory" style={{ width: '100%', justifyContent: 'center' }}>
			<div className='app-background'>
				<div className='main-container'>
					<div className='item-list'>
						<Container>
							{!loading && <><Spinner animation="border" variant="primary" style={{ margin: 'auto' }} /></>}
							{loading && shoppingListJson.length === 0 && <h3 style={{ textAlign: 'center' }}>No shopping lists found</h3>}
							{loading && shoppingListJson.length > 0 && shoppingListJson.map((shoppingList) => (
								<>
									<h1 className="mb-5">{shoppingList.identifier}</h1>
									<Row >
										{shoppingList.ingredients.map((userIngredient, index) => (
											<Col key={index} xs={12} md={3}>
												<Card>
													<Card.Header>
														<Button variant="danger" onClick={() => handleRemoveItem(userIngredient.ingredient.identifier, shoppingList.identifier)} style={{ float: 'right' }}>
															X
														</Button>
														{/* <Button variant="primary me-2" onClick={() => handleRemoveItem(index)} style={{ float: 'right' }}>
															<FontAwesomeIcon icon={faArrowDown} />
														</Button> */}
														{/* <Card.Text style={{ float: 'left' }}>{userIngredient.ingredient.generic_name}</Card.Text> */}
													</Card.Header>
													{getImage(userIngredient)}
													<Card.Body>
														<Card.Title className='mb-0'>{capitalise(userIngredient.ingredient.name ?? userIngredient.ingredient ?? "Unknown")}</Card.Title>
														<Card.Text className='mb-3'>{userIngredient.ingredient.description ?? "Unknown Description"}</Card.Text>
														<Card.Text className='mb-0'>Expiry: {userIngredient.expiry === 0 ? "Never" : millisecondsToString(new Date() - userIngredient.expiry)} </Card.Text>
													</Card.Body>
													<Card.Footer>
														{console.log(userIngredient?.ingredient?.stores) && userIngredient?.ingredient?.stores?.map((shop) => {
															
															return (
																<>
																	<Card.Text>{shop.store}: ${shop.price}</Card.Text>
																</>
															)
														})}
													</Card.Footer>
													<Card.Footer style={{ width: '100%' }}>
														<Row>
															<Col>
																<Card.Text className='mb-0'>
																	<FontAwesomeIcon icon={faCartArrowDown} /> {userIngredient.quantity}
																</Card.Text>
															</Col>
															<Col>
																<Card.Text className='mb-0'>
																	<FontAwesomeIcon icon={faDollarSign} /> 200
																</Card.Text>
															</Col>
														</Row>
													</Card.Footer>
												</Card>
												<br />
											</Col>
										))}
									</Row>
								</>
							))}

						</Container>
					</div>
				</div>
			</div>
		</div>
	);
}