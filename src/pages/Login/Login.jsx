import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>

            <div style={{ width: '450px' }} className='px-4 py-5 shadow rounded mx-auto'>
                <h3 className='text-center my-4'>Login Your Account !!</h3>
                <hr />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Login;