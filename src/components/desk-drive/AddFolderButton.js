import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"

export default function AddFolderButton() {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')

    function openModal() {
        setOpen(true)
    }

    function closeModel(){
        setOpen(false)
    }

    function handleSubmit(e) {
        e.preventDefault()

        database.folders.add({
            name: name,
        })
        setName("")
        closeModal()
    }
    return (
        <>
        <Button onClick={openModal} variant="outline-success" size="sm">
            <FontAwesomeIcon icon={ faFolderPlus } />
        </Button>
        <Modal show={open} onHide={closeModel}>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Folder Name</Form.Label>
                    </Form.Group>
                    <Form.Control type="text" required value={name} onChange={e => setName(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModel} >Close</Button>
                    <Button variant="success" type="submit">Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}
