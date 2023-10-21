import './blueButton.css';
import React from 'react';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//import * from "react-router-dom";
const BlueButton = (props) => {
    return (
        <div>
                <Button variant="outline-success" className={`text-center W100 btnSearchHover pe-4 ps-4 pt-1 borderBlue colorBlue btn-sign-in ${props.className}`}>
                <FontAwesomeIcon icon={props.fontIcon}/>
                <span className="fw-600"> {props.text} </span>
            </Button>
        </div>
    )
}
export default BlueButton;