import { React, useState, useEffect } from 'react';
import { Button, Form, Card, Row, Col, Container, Spinner, InputGroup, Image } from 'react-bootstrap';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFire, faFlag, faBasketShopping, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import { userLoggedIn, millisecondsToString, capitalise } from '../util/Helpers';
import { deleteUserInventoryItem, getFlaggedIngredients, putUserInventoryItem, getIngredientOptions, postShoppingListIngredient, reportUserInventoryItem } from '../util/Functions';

// main function
export default function FlaggedIngredients() {
	if (!userLoggedIn()) { window.location.href = '/login'; }

	const [loading, setLoading] = useState(false);
	const [inventoryJson, setInventoryJson] = useState({});

	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [items, setItems] = useState({});
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if (!loading) {
			getFlaggedIngredients().then(async (response) => {
				const data = await response.json();
				setInventoryJson(data);
				setItems(data);
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
		if (userIngredient.images && userIngredient.images.length > 0) {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src={userIngredient.images[0]} />
		} else {
			return <Card.Img style={{ objectFit: 'cover', width: '100%', height: '250px' }} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" />
		}
	}

	return (
		<div id="inventory" style={{ width: '100%', justifyContent: 'center' }}>
			<div><h1>User Reports</h1></div>
			<div className='app-background'>
				<div className='main-container'>
					<div className='item-list'>
						<Container>
							<Row >
								{!loading && <><Spinner animation="border" variant="primary" style={{ margin: 'auto' }} /></>}
								{loading && items.map((userIngredient, index) => (
									<Col key={index} xs={12} md={4}>
										<Card>
											{getImage(userIngredient)}
											<Card.Body>
												<Card.Title className='mb-0'>{capitalise(userIngredient.generic_name ?? "Unknown")}</Card.Title>
												<Card.Text className='mb-3'>{userIngredient.description ?? "Unknown Description"}</Card.Text>
											</Card.Body>
										</Card>
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