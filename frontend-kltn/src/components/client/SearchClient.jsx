import React from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'

const SearchClient = () => {
    return (
        <div style={{ width: '100%' }}>
            <InputGroup>
                <DropdownButton
                    title="Dropdown"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control className='py-2' placeholder='Tìm kiếm sản phẩm...' aria-label="Text input with dropdown button" />
                <Button style={{ background: '#39b0e5', border: 'none' }}>
                    <i style={{ color: '#f3f3f3' }} className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchClient