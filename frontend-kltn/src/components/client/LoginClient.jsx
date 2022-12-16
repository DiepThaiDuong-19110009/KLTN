import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as Yup from "yup";

const LoginClient = () => {
    // Toggle show passwors
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // Check validation form
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Định dạng email chưa chính xác")
                .required("*Vui lòng cung cấp email"),
            password: Yup.string()
                .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
                .required("*Vui lòng cung cấp mật khẩu")
        }),
        onSubmit: values => {
            console.log('===', values)
        }
    });

    return (
        <Row style={{ width: '100vw', height: '100vh', backgroundImage: 'linear-gradient(#39b0e5, #3aabd9, #b5dbe8)' }} className='mx-0 p-2 d-flex justify-content-center align-items-center'>
            <Col className='px-5 py-4 d-flex flex-column justify-content-between align-items-center' style={{ height: '90vh', background: '#f3f3f3', borderRadius: '10px' }} sm={10} md={8} lg={4} xl={4}>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{ width: '100%' }}>
                    <h4 className='py-2'>Đăng nhập</h4>
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type={passwordShown ? "text" : "password"}
                                name='password'
                                placeholder="Nhập mật khẩu"
                                value={formik.values.password}
                                onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password && (
                                <p style={{ color: 'red' }}>{formik.errors.password}</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Hiển thị mật khẩu" onClick={togglePasswordVisiblity}/>
                            <Link style={{ textDecoration: 'none', color: '#39b0e5' }} to='/'>Quên mật khẩu?</Link>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center'>
                            <Button style={{ background: '#39b0e5', border: 'none', margin: '0 auto', width: '100%' }} type="submit">
                                Đăng nhập
                            </Button>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center'>
                            <p className='my-0 py-3'>hoặc</p>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center'>
                            <Button className='d-flex justify-content-center align-items-center' style={{ background: '#f3f3f3', border: '1px solid #bbbbbb', margin: '0 auto', width: '100%' }} type="submit">
                                <Image className='me-3' style={{ width: '25px' }} src='https://res.cloudinary.com/dkzuyi8fq/image/upload/v1671161911/samples/KLTN/7465f30319191e2729668875e7a557f2_lf3cpy.png' alt='logo-Google'></Image>
                                <p className='my-0 py-2' style={{ color: '#333333' }}>
                                    Đăng nhập với Google
                                </p>
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <p>Bạn chưa có tài khoản?
                        <Link style={{ textDecoration: 'none', color: '#39b0e5' }} to='/register'> Đăng ký</Link>
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default LoginClient