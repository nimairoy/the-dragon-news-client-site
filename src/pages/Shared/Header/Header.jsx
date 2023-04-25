import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <h4>Journalism Without Fear or Favour</h4>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div style={{ background: '#F3F3F3', padding: '10px' }} className='d-flex bg-'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={40} pauseOnHover={true}>
                    Match Highlights: Germany vs Spain — as it happened !
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>                            
                            <Nav.Link href="#pricing">Career</Nav.Link>                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant='dark'>login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;