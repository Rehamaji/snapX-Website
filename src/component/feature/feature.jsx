import './feature.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faEye  } from '@fortawesome/free-solid-svg-icons';
import { faHeart  } from '@fortawesome/free-solid-svg-icons';
import One1 from '../../assets/images/img1-1.png';
import One2 from '../../assets/images/img1-2.png';
import Two1 from '../../assets/images/img2-1.png';
import Two2 from '../../assets/images/img2-2.png';
import Two3 from '../../assets/images/img2-3.png';
import PhotoVideo from "../photoAndVideo/photoVideo";

const feature = () => {
    return (
        <div id='#feature'>
            <h5 className="colorBlue text-center pt">PHOTOS & VIDEOS AT SNAPX</h5>
            <h1 className="text-center">Our Featured <span className="colorBlue">Photos & Videos </span> At SnapX</h1>
            <Container className="pt-5">
                <Row className=" d-flex justify-content-between w100">
                    <Col lg={6} md={12}>
                        <PhotoVideo header="A Walk In Nature" image={One1} num1="840" num2="160" icon1={faEye} icon2={faHeart} category="Underwater Turtle" ranked="Ranked: 1st" ></PhotoVideo>
                    </Col>
                    <Col lg={6} md={12}>
                        <PhotoVideo header="A Walk In Nature" image={One2} num1="840" num2="160" icon1={faEye} icon2={faHeart} category="Category: Photos" ranked="Ranked: 1st" ></PhotoVideo>
                    </Col>
                </Row>
                <Row className="">
                   <Col lg={4} md={12} >
                       <PhotoVideo header="Greeny Place" image={Two1} num1="840" num2="160" icon1={faEye} icon2={faHeart} category="Category: Photos" ranked="Ranked: 1st" ></PhotoVideo>
                   </Col>
                    <Col lg={4} md={12}>
                        <PhotoVideo header="Greeny Place" image={Two2} num1="840" num2="160" icon1={faEye} icon2={faHeart} category="Category: Photos" ranked="Ranked: 1st" ></PhotoVideo>
                    </Col>
                    <Col lg={4} md={12} >
                        <PhotoVideo header="Greeny Place" image={Two3} num1="23" num2="234" icon1={faEye} icon2={faHeart} category="Category: Photos" ranked="Ranked: 1st" ></PhotoVideo>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default feature;