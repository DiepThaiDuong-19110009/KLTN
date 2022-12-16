import React from 'react'
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap'

const SearchClient = () => {
    return (
        <div style={{ width: '100%' }}>
            <InputGroup>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Tất cả
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Áo sơ mi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control style={{border: '1px solid #bbbbbb'}} className='py-2' placeholder='Tìm kiếm sản phẩm...' aria-label="Text input with dropdown button" />
                <Button style={{ background: '#39b0e5', border: 'none' }}>
                    <i style={{ color: '#f3f3f3' }} className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchClient