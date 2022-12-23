import React, {useState} from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const SearchClient = () => {
    const [searchText, setSearchText] = useState('1')

    return (
        <div style={{ width: '100%' }}>
            <InputGroup id='search-select'>
                <Form.Select aria-label="Default select example" value={searchText} onChange={(e) => setSearchText(e.target.value)}>
                    <option value="1">Tất cả danh mục</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Control style={{ border: '1px solid #bbbbbb' }} className='py-2' placeholder='Tìm kiếm sản phẩm...' aria-label="Text input with dropdown button" />
                <Button style={{ background: '#39b0e5', border: 'none' }}>
                    <i style={{ color: '#f3f3f3' }} className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchClient