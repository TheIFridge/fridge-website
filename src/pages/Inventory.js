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

		setItems(newItems);
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
					{items.map((item, index) => (
						<div variant="dark" className='item-container'>
                <span>{item.itemName}</span>
                
                <div className='quantity'>
                    <Button variant="dark" onClick={() => handleQuantityDecrease(index)}>
                      -
                    </Button>&nbsp;&nbsp;
                  <span> {item.quantity} </span>
                  &nbsp;&nbsp;
                    <Button variant="dark" onClick={() => handleQuantityIncrease(index)}>
                      +
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;

                    <Button variant="dark" onClick={() => handleRemoveItem(index)}>
                      remove
                    </Button>
                </div>              
						</div>
					))}
				</div>
				<div className='total'>Total items: {items.reduce((accum, item) => accum + item.quantity, 0)}
                </div>
			</div>
		</div>
            
        </div>
    );
}