import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getAllPlaylers, deletePlayer } from '../../store/actions/players'
const PlayersList = () => {
    const dispatch = useDispatch();
    const { allPlayers } = useSelector(state => state.players);
    useEffect(() => {
        fetchAllPlayers()
    }, [])

    const fetchAllPlayers = () => {
        debugger
        dispatch(getAllPlaylers())
    }

    const handleDeletePlayer = (id) => {
        dispatch(deletePlayer(id))
        fetchAllPlayers()
    }
    return (
        <>
            <h3 className='my-3'>All Players</h3>
            {
                allPlayers ? (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPlayers.map(row => {
                                    return (
                                        <tr>
                                            <td><img src={row.image_path} className='team-flag' /> {row.fullname}</td>
                                            <td>{row.gender === 'm' ? "Male" : "Female"}</td>
                                            <td>{row.dateofbirth}</td>
                                            <td>{row.position.name}</td>
                                            <td>
                                                <Button variant='warning' className='btn btn-sm' onClick={() => handleDeletePlayer(row.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }

                        </tbody>
                    </Table>) : <h4>No Data Found of Player</h4>
            }

        </>
    )
}

export default PlayersList


