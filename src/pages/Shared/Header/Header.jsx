import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container} from 'react-bootstrap';
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
            
        </Container>
    );
};

export default Header;