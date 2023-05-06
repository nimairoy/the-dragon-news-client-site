import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    const [error, setError] = useState('');

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/category/0';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // call the logIn function
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log('Error', err);
                setError(err.message)
            })
    }

    // dynamic title
    useTitle('login')

    return (
        <Container>

            <div style={{ width: '450px' }} className='px-4 py-5 shadow rounded mx-auto'>
                <h3 className='text-center my-4'>Login Your Account !!</h3>
                <hr />
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button> <br />

                    <Form.Group>
                        <Form.Text className="text-muted">
                            Don't have an account ? <Link to="/register">Register</Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Login;