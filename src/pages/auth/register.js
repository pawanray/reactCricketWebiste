import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFormik } from 'formik';
import * as Yap from 'yup';
import ModalComponent from '../../components/modal';
import {ModalOpen} from '../../store/actions/modal'; 
import {useDispatch} from 'react-redux';
import {Register} from '../../store/actions/auth';
const validationSchema = Yap.object({
    name: Yap.string().required('Name is Required'),
    email: Yap.string().email().required('email is Required'),
    phone: Yap.string().required('Phone is Required'),
    password: Yap.string().required('Password is Required'),
    gender: Yap.string().required('Gender is Required'),

})

const RegisterComponent = ({ modalInfo }) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            gender: 'Male',
            password: '',
        },
        validationSchema,
        onSubmit(values) {
            dispatch(Register(values))
            console.log(values);
            dispatch(ModalOpen({type:"Register",show:false}))
        }
    })

    return (
        <>
            <ModalComponent open={modalInfo.show} handleSubmit={formik.handleSubmit}>
                <Form>
                    <Form.Group>
                        <Form.Control
                            placeholder="Name" name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.name} />
                        {formik.errors.name && formik.touched.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            placeholder="Email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.email} />
                        {formik.errors.email && formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            placeholder="Phone"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.phone} />
                        {formik.errors.phone && formik.touched.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.password} />
                        {formik.errors.password && formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                    </Form.Group>
                </Form>
            </ModalComponent>
        </>
    );
}

export default RegisterComponent