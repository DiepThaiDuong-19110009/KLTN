import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../components/Banner'
import Header from '../components/Header/Header'
import NavBar from '../components/Navbar'
import Slider from '../components/Slider'

const HomePage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Container className='mt-3'>
                <Slider />
                <Row className='mx-0 d-flex justify-content-between'>
                    <Col xl={3} className='px-0'>
                        <Banner id='123' url={'https://res.cloudinary.com/dkzuyi8fq/image/upload/v1670986236/samples/KLTN/logo-Xstore_yqzhts.png'} />
                    </Col>
                    <Col xl={3} className='px-0'>
                        <Banner url={'https://res.cloudinary.com/dkzuyi8fq/image/upload/v1670986236/samples/KLTN/logo-Xstore_yqzhts.png'} />
                    </Col>
                    <Col xl={3} className='px-0'>
                        <Banner url={'https://res.cloudinary.com/dkzuyi8fq/image/upload/v1670986236/samples/KLTN/logo-Xstore_yqzhts.png'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage