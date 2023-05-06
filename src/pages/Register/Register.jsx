import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    useTitle('Register')
    const { createUser } = useContext(AuthContext);
    const [checked, setChecked] = useState(false);

    const handleChecked = (e) => {
        const termChecked = e.target.checked;
        setChecked(termChecked);
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(form, email, password)

        // createUser function call to create a new user into the firebase 
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                alert('user created successfully')
                console.log(newUser)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Container>

            <div style={{ width: '450px' }} className='px-4 py-5 shadow rounded mx-auto'>
                <h3 className='text-center my-4'>Register Your Account !!</h3>
                <hr />
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Photo</Form.Label>
                        <Form.Control type="text" name='photo' required placeholder="Photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleChecked} type="checkbox" name='check' label={<>Accept Our <Link to="/terms">Terms and Conditons</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!checked} type="submit">
                        Register
                    </Button> <br />

                    <Form.Group>
                        <Form.Text className="text-muted">
                            Have an account ? <Link to="/login">Login</Link>
                        </Form.Text>
                    </Form.Group>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Register;