import React, { useState, use, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalOpen } from '../store/actions/modal'
import { useDispatch, useSelector } from 'react-redux';
const ModalComponent = ({ children, handleSubmit }) => {
    const { modalInfo } = useSelector(state => state.modal);

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(modalInfo.show)
    }, [modalInfo])
    const handleClose = () => dispatch(ModalOpen(false));
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo?.type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
            </Button>
                <Button variant="warning" onClick={handleSubmit}>
                    Submit
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent