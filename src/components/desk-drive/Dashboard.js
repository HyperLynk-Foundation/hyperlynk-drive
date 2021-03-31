import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavbarComponent from './Navbar'

export default function Dashboard() {
    return <>
        <NavbarComponent />
        <Container fluid>
            <AddFolderButton />
        </Container>

    </>
}
