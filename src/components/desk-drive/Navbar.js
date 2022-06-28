import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cloud from './cloud .png'

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="sm" >
            <Navbar.Brand as={Link} to="/">
                <img src={cloud } width="300" alt="cloud cf" />
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">
                    DeskPass
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
