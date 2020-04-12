import React from 'react';
import CharacterStats from './CharacterStats/CharacterStats';
import CharacterBackstory from './CharacterBackstory/CharacterBackstory';
import CharacterImage from '../Shared/CharacterImage/CharacterImage';
import { Row, Container, Col } from 'react-bootstrap';

const Character = props => (
    <div>
        <Row>
            <Col>
                <h2>{props.Character[0].Name}</h2>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <CharacterImage Image='' />
            </Col>
            <Col md={8}>
                <CharacterStats Stats={props.Character[0].Stats} />
            </Col>
        </Row>
        <Row>
            <Col>
                <CharacterBackstory Backstory={props.Character[0].Backstory} />
            </Col>
        </Row>
    </div>
)

export default Character;
