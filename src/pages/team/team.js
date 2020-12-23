import React, {useEffect} from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import  Tabs from 'react-bootstrap/Tabs';
import  Tab from 'react-bootstrap/Tab';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import TeamCard from '../../components/teamCard'
import {getAllTeams} from '../../store/actions/team'
const Team = ()=>{
const dispatch = useDispatch()
const {allTeams, africanLeague, bigBashLeague, international, nonInternational} = useSelector(state=>state.teams)


useEffect(()=>{
    dispatch(getAllTeams())
},[])

    return(
        <>
        <h3 className='my-3'>Cricket Teams</h3>
        <hr/>
        <div className='tabs mb-3'>
        <Tabs  defaultActiveKey="internationl" id="uncontrolled-tab-example">
        <Tab eventKey="internationl" title="Internationl">
            <Row>
            {
                international ? international.map(res=>{
                    return <Col sm={3}><TeamCard team={res}/></Col>
                }) : null
            } 
            </Row>

        </Tab>
        <Tab eventKey="bigBashLeauge" title="Big Bash T20 Leage">
        <Row>
            {
                bigBashLeague ? bigBashLeague.map(res=>{
                    return <Col sm={3}><TeamCard team={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>
        <Tab eventKey="africanLeauge" title="African T20 Leauge">
        <Row>
            {
                africanLeague ? africanLeague.map(res=>{
                    return <Col sm={3}><TeamCard team={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>

        <Tab eventKey="nonInternatioal" title="Non Internatioal">
        <Row>
            {
                nonInternational ? nonInternational.map(res=>{
                    return <Col sm={3}><TeamCard team={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>
        

    </Tabs>
    </div>
        </>
    )
}

export default Team
