import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-info"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightNav;