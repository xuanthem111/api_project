import React, {useState} from 'react'
import FormUser from './FormUser'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function({className, isOpen, onClosed, targetUser, onEditUser}) {
    
    const [modal, setModal] = useState(isOpen);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className} onClosed = {onClosed}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <FormUser targetUser = {targetUser} onAddUser = {onEditUser}/>
                </ModalBody>
            </Modal>
        </div>
    )
}