// react
import { React, useState, useEffect} from 'react';

// firebase
import { firestore } from '../service/firebase';
import { getDocs, updateDoc, collection, arrayUnion, doc } from '@firebase/firestore';
import { useAuthValue } from '../auth/AuthContext';

// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

// main function
export default function Inventory() {
    // get current user from context
    const {currentUser} = useAuthValue();

    // current user doc id
    const [docID, setDocID] = useState('');

    const [items,setItems] = useState([]);
    const fetchItems = async()=>{
        const response = collection(firestore, 'users');
        const data = await getDocs(response);

        data.forEach((document) => {
            if (document.data().uid === currentUser.uid) {
                setDocID(document.id);
                setItems(document.data().inventory);
            }
        });
    }

    const [add, setAdd] = useState('');
    useEffect(() => {fetchItems();});

    // handle save item
    const handleSave = async (e) => {
        e.preventDefault();
        
        if (add !== '') {
            // check if item already exists in inventory
            let exists = false;
            items.forEach((item) => {
                if (item.item === add) {
                    exists = true;
                }
            }
            );
            if (!exists) {
                console.log('adding item');
                // add item to inventory
                const response = doc(firestore, 'users', docID);
                await updateDoc(response, {
                    inventory: arrayUnion({item: add, quantity: 1, quantityType: 'unit'})
                });
                fetchItems();
                // setItems(data.data().inventory);
                // setItems(data.data().inventory);
                setAdd('');
            } else {
                console.log('item already exists');
                // add 1 to quantity of item in inventory
                const response = doc(firestore, 'users', docID, 'inventory');
                console.log(response);
                // const data = 
                // const data = getDocs(response);
                // console.log(data);
                // data.forEach((field) => {
                //     console.log(field.data().inventory);
                // }
                // const data = await updateDoc(response, {
                //     inventory: arrayUnion({item: add, quantity: 1, quantityType: 'unit'})
                // });
            }
        }



        // var someRef = doc(firestore, "users", docID);




        // updateDoc(someRef, {
        //     inventory: arrayUnion({item: add, quantity: 1, quantityType: 'unit'})
        // }).then(() => {
        //     console.log("Document successfully updated!");
        //     setAdd('');
        // }).catch((error) => {
        //     console.error("Error updating document: ", error);
        // }).then(() => {
        //     fetchItems();
        // });

        // if(add !== '') {
        //     let data = {
        //         item: add,
        //         quantity: 1,
        //         quantityType: 'units',
        //     };

        //     setAdd('');

        //     try {
        //         addDoc(ref, data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // } else {
        //     alert('Please enter an item!');
        // }
    };

    return (
        // show tooltip of dietry requirements
        <div id="yourmum" style={{ width: '100%', justifyContent : 'center'}}>
            <div><h1>Inventory</h1></div>

            <br />

            <Form onSubmit={handleSave}>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="Enter item to add..." required value={add} onChange={e => setAdd(e.target.value)}/>
                    <Button id="inputGroup-sizing-lg" type="submit">+</Button>
                </InputGroup>
            </Form>
            
            <br />
            
            <Table striped bordered hover style={{ width: '80%', margin: 'auto'}}>
                <thead>
                    <tr>
                        <th>Inventory Item</th>
                        <th style={{ width: '30%'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map(item=>{
                        return (
                            <tr key={Math.random()}>
                                <td>{item.item}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
        </div>
    );
}