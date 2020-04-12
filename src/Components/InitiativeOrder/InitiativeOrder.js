import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CharacterImage from '../Shared/CharacterImage/CharacterImage'
import HealthBar from './HealthBar/HealthBar';
import '../Shared/CharacterImage/CharacterImage.scss';

const InitiativeOrder = props => (
    <Container style={{paddingTop: '20px'}}>
        <Row>
            <Col md={5} style={{border: '1px solid black', padding: '5px'}}>
                <Row style={{padding: '5px'}}> 
                    <Col md={10}>
                        <CharacterImage Image='' />
                    </Col>
                    <Col md={1}>
                        <div>{1}</div>
                    </Col>
                </Row>
                <Row style={{padding: '5px'}}>
                    <Col md={12}>
                        <HealthBar DisplayHealth={true} />
                    </Col>
                </Row>
            </Col>
            
        </Row>
    </Container>
)

export default InitiativeOrder;
