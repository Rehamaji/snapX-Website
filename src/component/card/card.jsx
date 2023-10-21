import Card from 'react-bootstrap/Card';
import CardOne from '../../assets/images/card1.png';
import React from "react";
import BlueButton from '../kit/blue-button/blueButton';
import WhiteButton from '../kit/whiteButton/whiteButton';
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from '../../assets/images/icon2.png';
import './card.css';

function card() {
    return (
        <Card style={{width: '17rem'}} className="borderRadius20" >
            <div className="px-4 ">
                <div className="d-flex justify-content-between fw-600 mtb pt-4 ">
                    <div className="colorGray fw-600 ">
                        <WhiteButton text="Award Price"></WhiteButton>
                    </div>
                    <div className="colorBlue fw-700 fs1-4">
                        $1.200
                    </div>
                </div>
                <div className="pt-4">
                    <Card.Img variant="top" src={CardOne} alt=""/>
                </div>
                <Card.Body className="pt-4">
                    <Card.Title>Walk In The Nature Night </Card.Title>
                    <div className="d-flex justify-content-between  pt-2 fw-600 mtb">
                        <div className="colorGray fw-600 max-width">
                            <img src={Icon1} alt="" className="max-width"/>
                        </div>
                        <div className="colorGray ">
                            <img src={Icon2} alt="" className="max-width"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between  pt-2 fw-600 mtb">
                        <div className="colorGray fw-600">
                            80
                        </div>
                        <div className="colorGray">
                            260
                        </div>
                    </div>
                    <div className="d-flex justify-content-between fw-600 mtb">
                        <div className="colorGray fw-600">
                            Participants
                        </div>
                        <div className="colorGray">
                            Submissions
                        </div>
                    </div>
                    <div className='W100  pt-4'>
                        <BlueButton text="Browse Nature Pic Contests" className="borderRadius"></BlueButton>
                    </div>
                    <Card.Text className="text-center colorGray pt-4">
                        * Client will pay via Online Payments
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
}

export default card;