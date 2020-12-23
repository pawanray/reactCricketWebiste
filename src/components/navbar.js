import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux'
import { ModalOpen } from '../store/actions/modal';
import { Login } from '../store/actions/auth';


import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Navbar = () => {
    const dispatch = useDispatch()
    const { login, register } = useSelector(state => state.auth);
    let getLogin = JSON.parse(localStorage.getItem('login'));
    const { username } = getLogin ? getLogin : login;
    const getUsername = username ? username.split('@') : ['no user']
    return (

        <Row className='bg-primary'>
            <Col className='logo'>
                {/* <img src={Logo} width="200" alt='logo' /> */}
                    Cricket
                </Col>
            <Col>
                    <nav className='menubar'>
                        <ul>
                            <li className='d-flex'>
                                {
                                    getLogin?.username === "admin@admin.com" ? (
                                        <> <Link to="/teamsList">Teams list</Link>
                                            <Link to="/usersList">Users list</Link>
                                            <Link to="/playersList">Players list</Link>
                                        </>
                                    ) : (<><Link to="/">Home </Link>
                                        <Link to="/team">Teams</Link>
                                        <Link to="/players">Players</Link></>)
                                }

                                {
                                    getLogin?.username ? (<><span className='username'>Welcome <span className='ml-2'>{getUsername[0]}</span></span> <button className='btn btn-sm btn-warning' onClick={() => dispatch(Login({}))}>Logout</button></>) : (
                                        <>
                                            <button className='btn btn-sm btn-warning mr-2' onClick={() => dispatch(ModalOpen({ type: "Login", show: true }))}>Login</button>
                                            <button className='btn btn-sm btn-warning' onClick={() => dispatch(ModalOpen({ type: "Register", show: true }))}>Register</button>
                                        </>
                                    )

                                }


                            </li>
                        </ul>
                    </nav>
             
            </Col>

        </Row>

    );
}

export default Navbar