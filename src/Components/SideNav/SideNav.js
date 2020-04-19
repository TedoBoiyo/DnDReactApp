import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const SideNav = props => (
    <div>
        <Row style={{margin: '5px 0', padding: '5px 0', borderBottom: '1px solid black'}}>
            <Col md={12}>
                <h3>DM Actions</h3>
            </Col>
        </Row>
        <Row style={{margin: '5px 0', padding: '5px 0'}}>
            <Col md={2}>
                <div className='btn btn-primary'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </Col>
            <Col md={10} className='text-center'>
                <h4>Current Tab</h4>
            </Col>
        </Row>
    </div>
)

export default SideNav;