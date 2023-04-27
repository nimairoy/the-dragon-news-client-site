import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavigationBar = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link to='/' className='text-decoration-none text-secondary me-2  fw-bold'>Home</Link>
                            <Link to='about' className='text-decoration-none text-secondary  me-2 fw-bold'>About</Link>
                            <Link to='career' className='text-decoration-none text-secondary  me-2 fw-bold'>Career</Link>

                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle> }
                            {
                                user ?
                                    <Button variant='dark'>Log out</Button> :
                                    <Link to='/login'><Button variant='dark'>login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;