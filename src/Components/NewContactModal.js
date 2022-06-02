import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function NewContactModal({ closeModal }) {

    const idRef = useRef();
    const nameRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        closeModal();
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Id</Form.Label>
                            <Form.Control type='text' ref={idRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' ref={nameRef} required></Form.Control>
                        </Form.Group>
                        <Button type='submit'>Create</Button>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </>
    )
}
