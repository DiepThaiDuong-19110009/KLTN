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
                        className='d-flex justify-content-between align-items-center'
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        style={{ background: '#39b0e5', border: 'none', width: '250px', borderRadius: '0px' }}
                    >
                        <i className="fas fa-list me-2"></i>
                        Danh mục sản phẩm
                        <i style={{ marginLeft: '15px' }} className="fas fa-caret-down"></i>
                    </Button>
                    <Collapse in={open}>
                        <ListGroup style={{ position: 'absolute', width: '250px', borderRadius: '0px' }}>
                            <ListGroup.Item className='choose-item-category' style={{ fontSize: '15px', cursor: 'pointer ' }}>
                                <i className="fas fa-long-arrow-alt-right me-3"></i>Áo sơ mi
                            </ListGroup.Item>
                            <ListGroup.Item className='choose-item-category' style={{ fontSize: '15px', cursor: 'pointer ' }}>
                                <i className="fas fa-long-arrow-alt-right me-3"></i>Áo thun
                            </ListGroup.Item>
                            <ListGroup.Item className='choose-item-category' style={{ fontSize: '15px', cursor: 'pointer ' }}>
                                <i className="fas fa-long-arrow-alt-right me-3"></i>Giày thể thao
                            </ListGroup.Item>
                            <ListGroup.Item className='choose-item-category' style={{ fontSize: '15px', cursor: 'pointer ' }}>
                                <i className="fas fa-long-arrow-alt-right me-3"></i>Quần tây
                            </ListGroup.Item>
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