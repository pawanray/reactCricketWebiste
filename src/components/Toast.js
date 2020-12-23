import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Toast from 'react-bootstrap/Toast';

const ToastComponent = ()=>{
    const [show, setShow] = useState(true);
    return (
        <Row>
        <Col>
          <Toast onClose={() => setShow(false)} show={true} delay={3000} autohide>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    )
}
export default ToastComponent