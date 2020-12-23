import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Button  from 'react-bootstrap/Button';
import {getAllTeams, deleteTeam} from '../../store/actions/team'
const TeamsList = () => {
    const dispatch = useDispatch();
    const { allTeams } = useSelector(state => state.teams);
    useEffect(()=>{
        fetchAllTeams()
    },[])
    
    const fetchAllTeams = ()=>{
        debugger
        dispatch(getAllTeams())
    }

 const handleDeleteTeam = (id) => {
    dispatch(deleteTeam(id))
    fetchAllTeams()
 }
    return (
        <>
        <h3 className='my-3'>All Teams</h3>
            {
                allTeams ? (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Team</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTeams.map(row => {
                                    return (
                                    <tr>
                                        <td><img src={row.image_path} className='team-flag'/> {row.name}</td>
                                        <td>{row.code}</td>
                                        <td>{row.national_team === true ? "National Team": "League Team"}</td>
                                        <td>
                                            <Button variant='warning' className='btn btn-sm' onClick={()=>handleDeleteTeam(row.id)}>Delete</Button>
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

export default TeamsList


