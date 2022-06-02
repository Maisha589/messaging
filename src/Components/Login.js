import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function Login({ setId }) {

    const idRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        setId(idRef.current.value)
    }

    function createNewId() {
        setId(uuidv4())
    }

    return (
        <Container className='d-flex align-items-center' style={{ height: "100vh" }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type='text' ref={idRef} required></Form.Control>
                </Form.Group>
                <Button className='m-2' type='submit'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create a new ID</Button>
            </Form>
        </Container>
    )
}
