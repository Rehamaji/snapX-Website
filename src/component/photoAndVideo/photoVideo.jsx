import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PhotoVideo = (props) => {
    return (
        <div id="#photo">
            <div className=" position-relative w-fit-content">
                <img src={props.image} alt="" className="max-width-100"/>
                <div
                    className="d-flex align-items-center border-2 width90 justify-content-between position-absolute top8 bgWhite borderRadius10 mx-3">
                    <h5 className="px-4 py-2">{props.header}
                    </h5>
                    <div className="px-4 py-2">
                        <FontAwesomeIcon icon={props.icon1}/> {props.num1} | <FontAwesomeIcon
                        icon={props.icon2}/> {props.num2}
                    </div>
                </div>
                <div className="d-flex justify-content-between px-3 pt-2 fw-600 mtb ">
                    <div className="colorGray fw-600 ">
                        {props.ranked}
                    </div>
                    <div className="colorBlue">
                        {props.category}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhotoVideo;