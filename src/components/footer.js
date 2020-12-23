import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Footer = () =>{
    return(
        <Row className='bg-primary'>
            <Col className='text-center py-3'>
            <small className='text-white'>Copyright@cicket.com</small>
            </Col>
        </Row>
    )
}

export default Footer
