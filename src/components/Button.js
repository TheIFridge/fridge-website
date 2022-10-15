import React from 'react'
import Button from 'react-bootstrap'

function Button(props) {
    //onclick will render a new page
    return (
            //onclick will render a new page
            <Button variant="primary" onClick={() => props.setFilter(props.name)}>
                {props.name}
            </Button>
    );
}

export default Button