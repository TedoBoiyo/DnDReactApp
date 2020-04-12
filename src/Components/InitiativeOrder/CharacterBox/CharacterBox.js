import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CharacterImage from '../../Shared/CharacterImage/CharacterImage'
import HealthBar from './HealthBar/HealthBar';
import '../../Shared/CharacterImage/CharacterImage.scss';

const CharacterBox = props => (
    <Row>
        <Col md={3} style={{border: '1px solid black', padding: '5px'}}>
            <Row>
                <Col md={10}>
                    <h4>{props.Character.Name}</h4>
                </Col>
                <Col md={2}>
                    <p>{props.Character.InitiativeOrder}</p>
                </Col>
            </Row>
            <Row style={{padding: '5px'}}> 
                <Col>
                    <CharacterImage Image='' />
                </Col>
            </Row>
            <Row style={{padding: '5px'}}>
                <Col md={12}>
                    <HealthBar DisplayHP={props.Character.DisplayHP} HP={props.Character.HP} />
                </Col>
            </Row>
        </Col>
    </Row>
)

export default CharacterBox;
