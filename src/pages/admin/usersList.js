import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Button  from 'react-bootstrap/Button';
const UsersList = () => {
    const { register } = useSelector(state => state.auth);
    let getUserLocal = localStorage.getItem('register') ?  JSON.parse(localStorage.getItem('register')) : []
    let getUserData = register.length ? register : getUserLocal;
    return (
        <>
        <h3 className='my-3'>All Users</h3>
            {
                getUserData.length ? (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getUserData.map(row => {
                                    return (
                                    <tr>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.password}</td>
                                        <td>
                                            <Button variant='warning' className='btn btn-sm'>Delete</Button>
                                        </td>
                                    </tr>
                                    )
                                })

                            }

                        </tbody>
                    </Table>) : <h4>No Data Found of Users</h4>
            }

        </>
    )
}

export default UsersList


