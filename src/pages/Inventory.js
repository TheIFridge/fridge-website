// react
import { React, useState} from 'react';

// firebase
// import { firestore } from '../service/firebase';
// import { getDocs, updateDoc, collection, arrayUnion, doc } from '@firebase/firestore';
// import { useAuthValue } from '../auth/AuthContext';

// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// main function
export default function Inventory() {

    const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState('');

    
    const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
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
							<Button variant="secondary" onClick={() => handleAddButtonClick()} >
							Add
							</Button>
						</InputGroup>
					</div>

					<div className='item-list'>
						<Container>
							<Row >
								{items.map((item, index) => (
									<Col xs={12} md={4}>
										<Card style={{ width: '18rem' }}>
											<Card.Img variant="top" src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg" />
											<Card.Body>
												<Card.Title>{item.itemName}</Card.Title>
												<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
												{/* <Button variant="primary">Go somewhere</Button> */}
												<Button variant="dark" onClick={() => handleQuantityDecrease(index)}> - </Button>
												&nbsp;&nbsp;
												<span> {item.quantity}</span>
												&nbsp;&nbsp;
												<Button variant="dark" onClick={() => handleQuantityIncrease(index)}> + </Button>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<Button variant="dark" onClick={() => handleRemoveItem(index)}> Remove </Button>
											</Card.Body>
										</Card>
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