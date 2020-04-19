import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const TopNav = props => (
    <Row style={{border:'5px solid black', padding:'5px'}}>
        <Col md={11}>
            <h1>Session: {props.SessionTitle}</h1>
        </Col>
        <Col md={1} className='text-right'>
            <FontAwesomeIcon icon={faBars} className='fa-3x' />
        </Col>
    </Row>
)

export default TopNav;