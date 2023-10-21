import Button from "react-bootstrap/Button";
import React from "react";
import './whiteButton.css';
const BlueButton = (props) => {
    return (
        <div>
            <Button variant="outline-success btn-sign-in" className={`pe-2 ps-2 pt-1 mx-2 bg-blue colorWhite border btnSignIn ${props.className}`} >
                <span className="fw-600"> {props.text} </span>
            </Button>

        </div>
    )
}
export default BlueButton;