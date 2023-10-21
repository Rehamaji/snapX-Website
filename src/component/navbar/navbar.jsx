import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the icon you want
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png'; // Use two levels of '../' to go up to the 'src' directory


const AllNavbar = () => {
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(true);
    };

    const hideDropdown = (e) => {
        setShow(false);
    };

    return(
       <div>
           <Navbar expand="lg" className="bg-body-tertiary pos-fixed w-100 z-10">
               <Container>
                   <Navbar.Brand href="#home">
                       <img src={Logo} alt="Banner Background" />
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="mx-auto padding-nav bg-blue color-white mt-1">
                           <Nav.Link href="#home" className="colorWhite fw-500" >
                               <Link to="/">Home</Link>
                           </Nav.Link>
                           <NavDropdown title="PHOTO & VIDEOS"
                                        id="basic-nav-dropdown"
                                        className="colorWhite fw-500"
                                        show={show}
                                        onMouseEnter={showDropdown}
                                        onMouseLeave={hideDropdown}>

                               <NavDropdown.Item
                                   as={Link}
                                   to="/contests"
                                   className="colorBlack colorBlueOnHover move-text"
                                   onMouseEnter={showDropdown} // Show the dropdown on hover
                                    >CONTESTS</NavDropdown.Item>
                               <NavDropdown.Divider/>
                               <NavDropdown.Item
                                   as={Link} to="./singleContests"
                                   className="colorBlack colorBlueOnHover move-text"
                                   onMouseEnter={showDropdown} // Show the dropdown on hover
                               >
                                   SINGLE CONTEST
                               </NavDropdown.Item>
                           </NavDropdown>
                           <Nav.Link as={Link} to="/categories" className="colorWh  ite fw-500">CATEGORIES</Nav.Link>
                           <Nav.Link as={Link} to="/users" className="colorWhite fw-500">USERS</Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
                   <Button variant="outline-success borderBlue colorBlue btn-sign-in pe-4 ps-4 pt-1 btnSearchHover" >
                       <FontAwesomeIcon icon={faUser}/>
                        <span className="fw-600"> Sign In/Up </span>
                    </Button>
               </Container>
               </Navbar>
       </div>
    );
}
export default AllNavbar;