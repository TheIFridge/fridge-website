import React from "react";
import Button from "react-bootstrap"

function FilterButton(props) {
    return (
        //button that will filter the data
        <Button variant="primary" onClick={() => props.setFilter(props.name)}>
            {props.name}
        </Button>
    );
}

export default FilterButton;