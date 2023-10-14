import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the icon you want
import './navbar.css';
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />*/
// eslint-disable-next-line react-hooks/rules-of-hooks

const AllNavbar = () => {
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(!show);
    };

    const hideDropdown = (e) => {
        setShow(false);
    };

    return(
       <div>
           <Navbar expand="lg" className="bg-body-tertiary pos-fixed w-100">
               <Container>
                   <Navbar.Brand href="#home">
                       <img src="/assets/images/logo.png" alt="SnapX Photography Template"/>
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="mx-auto padding-nav bg-blue color-white mt-1">
                           <Nav.Link href="#home" className="colorWhite fw-500" >HOME</Nav.Link>
                           <NavDropdown title="PHOTO & VIDEOS" id="basic-nav-dropdown" className="colorWhite fw-500"  show={show}
                                        onMouseEnter={showDropdown}
                                        onMouseLeave={hideDropdown}>
                               <NavDropdown.Item href="#action/3.1">CONTESTS</NavDropdown.Item>
                               <NavDropdown.Divider />
                               <NavDropdown.Item href="#action/3.2">
                                   SINGLE CONTEST
                               </NavDropdown.Item>
                           </NavDropdown>
                           <Nav.Link href="#link" className="colorWhite fw-500">CATEGORIES</Nav.Link>
                           <Nav.Link href="#link" className="colorWhite fw-500">USERS</Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
                   <Button variant="outline-success borderBlue colorBlue btn-sign-in pe-4 ps-4 pt-1">
                       <FontAwesomeIcon icon={faUser}/>
                       Sign In/Up
                    </Button>
               </Container>
           </Navbar>
       </div>
    )
}
export default AllNavbar;