import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchClient from '../SearchClient'

const BodyHeaderClient = () => {
    // Scroll page
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 50 ? "is-sticky" : "";
        setSticky(stickyClass);
    };
    const classes = `header-section ${sticky}`;

    return (
        <div style={{ borderBottom: 'solid 1px #dddddd' }} className={classes}>
            <Container style={{ color: '#ffffff', fontSize: '13px' }}>
                <Row className='mx-0 d-flex justify-content-between align-items-center' style={{ color: '#212529' }}>
                    <Col style={{ width: 'auto' }} className='px-0 py-3 d-flex align-items-center' xl={3}>
                        <Link style={{ textDecoration: 'none' }} to='/' className='d-flex justify-content-center align-items-center'>
                            <Image
                                alt="X-Store"
                                src="https://res.cloudinary.com/dkzuyi8fq/image/upload/v1670986236/samples/KLTN/logo-Xstore_yqzhts.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-3"
                            />{' '}
                            <p className='my-0' style={{ fontSize: '30px', color: '#333333' }}>X-Store</p>
                        </Link>
                    </Col>
                    <Col style={{ width: 'auto' }} className='responsive-appear-max responsive-disappear-min' xl={3}>
                        <div className='px-0 py-3 d-flex justify-content-end'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i style={{ fontSize: '25px', position: 'relative', background: '#eeeeee', borderRadius: '50%', width: '50px', height: '50px' }} className="fas fa-shopping-basket d-flex justify-content-center align-items-center">
                                    <p className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#39b0e5', color: '#f3f3f3', fontSize: '14px', width: '23px', height: '23px', borderRadius: '50%' }}>0</p>
                                </i>
                                <p style={{ fontSize: '16px', marginLeft: '10px' }} className='my-0'>0 VNĐ</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='px-0 py-4 d-flex justify-content-center' xl={6}>
                        <SearchClient />
                    </Col>
                    <Col style={{ width: 'auto' }} className='responsive-appear-min responsive-disappear-max' xl={3}>
                        <div  className='px-0 py-3 d-flex justify-content-end'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i style={{ fontSize: '25px', position: 'relative', background: '#eeeeee', borderRadius: '50%', width: '50px', height: '50px' }} className="fas fa-shopping-basket d-flex justify-content-center align-items-center">
                                    <p className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#39b0e5', color: '#f3f3f3', fontSize: '14px', width: '23px', height: '23px', borderRadius: '50%' }}>0</p>
                                </i>
                                <p style={{ fontSize: '16px', marginLeft: '10px' }} className='my-0'>0 VNĐ</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BodyHeaderClient