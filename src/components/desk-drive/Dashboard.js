import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import NavbarComponent from './Navbar'

export default function Dashboard() {
    const { folder } = useFolder()

    return <>
        <NavbarComponent />
        <Container fluid>
            <AddFolderButton currentFolder={folder} />
        </Container>

    </>
}
