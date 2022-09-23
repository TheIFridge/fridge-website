import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function SearchBar({placeholder, data}) {
    const [searchTerm, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord= event.target.value
        const newFilter = data.filter((value) => {
            return value.text.toLowerCase().includes(searchWord.toLowerCase)
        });

        if (searchWord === "") {
            setFilteredData([]);

                // <Col xs={12} md={4}>
                //     <Row>
                //     <Card style={{ width: '25rem', height: '20rem', margin: '5px'}} key={key}>
                //     <Card.Img style={{width: 120, height: 80}}variant="top" src={value.image} />
                //     <Card.Body>
                //         <Card.Title>{value.title}</Card.Title>
                //         <Card.Text>
                //         {value.text}
                //         </Card.Text>
                //         <Card.Text>
                //         {value.price}
                //         </Card.Text>
                //         <Button variant="primary">Go somewhere</Button>
                //     </Card.Body>
                //     </Card>
                //     </Row>
                // </Col>
        
        } else {
        setFilteredData(newFilter);
        }
    };

    return (
        <div className='search'>
            <div classname='searchInputs'>
                <InputGroup className="mb-3">
                    <Form.Control type="searchItem" placeholder={placeholder}/>
                    &nbsp;
                    <Button variant="secondary" onClick={() => handleFilter()}>
                    Search
                    </Button>
                </InputGroup>
            </div>             

            {searchTerm.length !== 0 && (
            <div className='dataResult'>
                {searchTerm.map((value, key) => {
                    return <div> <Col xs={12} md={4}>
                        <Row> 
                            <Card style={{ width: '25rem', height: '20rem', margin: '5px'}} key={key}>
                                <Card.Img style={{width: 120, height: 80}}variant="top" src={value.image} />
                                <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.text}
                                </Card.Text>
                                <Card.Text>
                                    {value.price}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    </div>
                })}
            </div>
            )} 
        </div>
    )
}

export default SearchBar;