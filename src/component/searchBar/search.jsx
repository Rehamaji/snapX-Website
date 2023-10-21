import './search.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormSelectOption from "../kit/formSelect/formSelect";
import WhiteButton from "../kit/whiteButton/whiteButton";

const Search = () => {
    return (
        <div className="w-90 borderRadius10 shadow pb-4 pt-4 bg-body posAbsolute">
            <Row>
                <div className="ps-5 row ">
                    <Col className="col-lg-9 col-sm-12">
                        <Row>
                        <Col className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                            <Form.Label htmlFor="inputPassword5" className="fw-600">Search Any Contest</Form.Label>
                            <Form.Control
                                aria-label="Search Any Contest"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                className="colorGray bgLightGray border-0"
                            />
                        </Col>
                        <Col className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <FormSelectOption label="Pick Category"
                                              placeholder="Choose a Category"
                                              op1="Nature"
                                              op2="Portrait"
                                              op3="Space">
                            </FormSelectOption>
                        </Col>
                        <Col className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <FormSelectOption label="Award Price"
                                              placeholder="Choose a Category"
                                              op1="500$ to 1000$"
                                              op2="1500$ to 2000$"
                                              op3="2500$ to 3000$"
                                              op4="3500$+"
                            ></FormSelectOption>
                        </Col>
                        </Row>
                    </Col>
                    <Col className="col-lg-3 col-sm-12 pt-4">
                        <WhiteButton text="Search Now" className="pt-2 pe-4 ps-4"></WhiteButton>
                    </Col>
                </div>
            </Row>
        </div>
    );
}
export default Search;