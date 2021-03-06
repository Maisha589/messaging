import React, { useState } from 'react'
import { Button, Modal, Nav, Tab } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen, setModalOpen] = useState(false);

    const conversationOpen = activeKey === CONVERSATIONS_KEY;

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{ width: "250px" }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                {/* Nav */}
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* sidebar content */}
                <Tab.Content className='border-end overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations></Conversations>
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts></Contacts>
                    </Tab.Pane>
                </Tab.Content>
                {/* Bottom content */}
                <div className='p-2 border-top border-end fs-5'>
                    <h6>Your Id: <span className='text-muted'>{id}</span></h6>
                </div>

                <Button onClick={() => setModalOpen(true)} className='rounded-0'>
                    New {conversationOpen ? "conversation" : "contact"}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationOpen ?
                    <NewConversationModal closeModal={closeModal}></NewConversationModal>
                    :
                    <NewContactModal closeModal={closeModal}></NewContactModal>
                }
            </Modal>
        </div>
    )
}
