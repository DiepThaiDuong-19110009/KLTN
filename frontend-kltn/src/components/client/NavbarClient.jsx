import React, { useState } from 'react'
import { Button, Collapse, Dropdown, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

const NavbarClient = () => {
    const [open, setOpen] = useState(false);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        style={{ background: '#39b0e5', border: 'none', outline: 'none' }}
                    >
                        <i className="fas fa-list me-2"></i>
                        Danh mục sản phẩm
                        <i style={{marginLeft: '15px'}} className="fas fa-caret-down"></i>
                    </Button>
                    <Collapse in={open}>
                        <ListGroup style={{ position: 'absolute' }}>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Collapse>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Trang chủ</Nav.Link>
                        <Nav.Link href="#link">Sản phẩm</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarClient