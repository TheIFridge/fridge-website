import React from 'react'

function SearchBar(props) {

    const filteredData = data.filter((element) => {
        if (props.searchTerm === ""){
            return element;
        } else if (element.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            return element;
        } return false;
    }).map((element, key) => {
        return (
            <Col xs={12} md={4}>
                <Row>
                    <Card style={{ width: '25rem', height: '20rem', margin: '5px'}} key={key}>
                        <Card.Img style={{width: 120, height: 80}}variant="top" src={val.image} />
                        <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                        {val.text}
                        </Card.Text>
                        <Card.Text>
                        {val.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="info" /*onClick={ => sput function in}*/>refresh price</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
          )
    })
  
}

export default SearchBar    