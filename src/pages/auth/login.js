import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFormik } from 'formik';
import * as Yap from 'yup';
import ModalComponent from '../../components/modal';
import {ModalOpen} from '../../store/actions/modal'; 
import {Login} from '../../store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import ToastComponent from '../../components/Toast';

const validationSchema = Yap.object({
    username: Yap.string().required('Username is Required'),
    password: Yap.string().required('Password is Required'),
})

const LoginComponent = ({modalInfo}) => {
    const dispatch = useDispatch()
    const {register} = useSelector(state=>state.auth);
    const [userMsg, setUserMsg]= useState('');
    const getRegistedUsers = JSON.parse(localStorage.getItem('register'));
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit(values) {
            const isUser = register.length ? register.some(function(item) {
                return item.email === values.username && item.password === values.password;
              }) :  getRegistedUsers.some(function(item) {
                return item.email === values.username && item.password === values.password;
              })

              if(isUser === true){
                dispatch(Login(values))
                dispatch(ModalOpen({type:"Register",show:false}))
                userMsg('')
              }
              
              else{
                setUserMsg('Username & Password does not match')
              }

            console.log(values)
        }
    })

    return (
        <>
            <ModalComponent open={modalInfo} handleSubmit={formik.handleSubmit}>
                <Form>
                    <Form.Group>
                        <Form.Control
                            placeholder="Username/Email" name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.username} />
                            { formik.errors.username && formik.touched.username ? <div className="text-danger">{formik.errors.username}</div> : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            placeholder="Password" 
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.password} />
                            { formik.errors.password && formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                    </Form.Group>
                    <div className="text-danger">{userMsg}</div>
                </Form>
            </ModalComponent>
         
        </>
    );
}

export default LoginComponent