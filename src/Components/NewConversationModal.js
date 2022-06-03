import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from "../Contexts/ContactsProvider";
import { useConversations } from '../Contexts/ConversationProvider';


export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    function handleSubmit(event) {
        event.preventDefault();
        createConversation(selectedContactIds)
        closeModal();
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }
            else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {
                    contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type='checkbox'
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            >
                            </Form.Check>
                        </Form.Group>
                    ))
                }
                <Button type='submit'>Create</Button>
            </Form>
        </Modal.Body>

    </>
}
