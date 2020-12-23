import React, {useEffect} from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import  Tabs from 'react-bootstrap/Tabs';
import  Tab from 'react-bootstrap/Tab';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import PlayerCard from '../../components/playerCard'
import {getAllPlaylers} from '../../store/actions/players'
const Players = ()=>{
const dispatch = useDispatch()
const {bastman,
    bowler,
    wicketKeeper,
    allRounder,
    allPlayers } = useSelector(state=>state.players)


useEffect(()=>{
    dispatch(getAllPlaylers())
},[])

    return(
        <>
        <h3 className='my-3'>Players</h3>
        <hr/>
        <div className='tabs mb-3'>
        <Tabs  defaultActiveKey="bestman" id="uncontrolled-tab-example">
        <Tab eventKey="bestman" title="Bestman">
            <Row>
            {
                bastman ? bastman.map(res=>{
                    return <Col sm={3}><PlayerCard player={res}/></Col>
                }) : null
            } 
            </Row>

        </Tab>
        <Tab eventKey="bowler" title="Bowler">
        <Row>
            {
                bowler ? bowler.map(res=>{
                    return <Col sm={3}><PlayerCard player={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>
        <Tab eventKey="allrounder" title="Allrounder">
        <Row>
            {
                allRounder ? allRounder.map(res=>{
                    return <Col sm={3}><PlayerCard player={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>

        <Tab eventKey="wicketkeeper" title="Wicketkeeper">
        <Row>
            {
                wicketKeeper ? wicketKeeper.map(res=>{
                    return <Col sm={3}><PlayerCard player={res}/></Col>
                }) : null
            } 
            </Row>
        </Tab>
        

    </Tabs>
    </div>
        </>
    )
}

export default Players
