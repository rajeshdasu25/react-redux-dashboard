import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
        <header>
            <Navbar bg="primary" expand="lg">
                {/* <Navbar.Brand href="/">React Dashboard</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>*/}
                        <NavDropdown title={`Rajesh`} id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
};

export default AppHeader;