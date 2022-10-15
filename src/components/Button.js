import React from 'react'

function Button(props) {
    //onclick will render a new page
    return (
        <button onClick={props.onClick} className="btn btn-primary">{props.text}</button>
    )
}
export default Button