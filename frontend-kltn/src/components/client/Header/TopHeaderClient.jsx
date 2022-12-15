import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopHeaderClient = () => {
    return (
        <div className='py-1' style={{ borderBottom: 'solid 1px #dddddd' }}>
            <Container style={{ color: '#ffffff', fontSize: '13px' }}>
                <Row className='mx-0 d-flex align-items-center' style={{ color: '#212529' }}>
                    <Col className='px-0 d-flex align-items-center justify-content-start'>
                        <p className='my-0 d-flex align-items-center me-3'>
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <p className='my-0 responsive-disappear-max'>Số 123, Lê Văn Việt, Q9, TPHCM</p>
                        </p>
                        <p className='my-0 me-4 d-flex align-items-center'>
                            <i className="fas fa-envelope me-2"></i>
                            <p className='my-0 responsive-disappear-max'>19110009@student.hcmute.edu.vn</p>
                        </p>
                    </Col>
                    <Col className='px-0 d-flex justify-content-end'>
                        <Link to='/login' relative="path" style={{ textDecoration: 'none', color: '#222222' }}>
                            Đăng nhập
                        </Link>
                        <p className='my-0 mx-2'>
                            |
                        </p>
                        <Link to='/register' relative="path" style={{ textDecoration: 'none', color: '#222222' }}>
                            Đăng ký
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopHeaderClient