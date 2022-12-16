import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as Yup from "yup";

const ForgotPasswordClient = () => {
    // Check validation form
    const formik = useFormik({
        initialValues: {
            email: ""
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Định dạng email chưa chính xác")
                .required("*Vui lòng cung cấp email"),
        }),
        onSubmit: values => {
            console.log('===', values)
        }
    });

    return (
        <Row style={{ width: '100vw', height: '100vh', backgroundImage: 'linear-gradient(#39b0e5, #3aabd9, #b5dbe8)' }} className='mx-0 p-2 d-flex justify-content-center align-items-center'>
            <Col className='px-5 py-4 d-flex flex-column justify-content-between align-items-center' style={{ height: 'auto', background: '#f3f3f3', borderRadius: '10px' }} sm={10} md={8} lg={4} xl={4}>
                <div className='d-flex flex-column justify-content-between align-items-center mb-5' style={{ width: '100%' }}>
                    <h4 className='py-2'>Quên mật khẩu</h4>
                    <Form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name='email'
                                placeholder="Nhập email"
                                value={formik.values.email}
                                onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email && (
                                <p style={{ color: 'red' }}>{formik.errors.email}</p>
                            )}
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center'>
                            <Button style={{ background: '#39b0e5', border: 'none', margin: '0 auto', width: '100%' }} type="submit">
                                Quên mật khẩu
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none', color: '#39b0e5' }} to='/login'>Quay lại</Link>
                </div>
            </Col>
        </Row>
    );
}

export default ForgotPasswordClient