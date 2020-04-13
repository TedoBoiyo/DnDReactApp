import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CharacterImage from '../CharacterImage/CharacterImage';
import HealthBar from './HealthBar/HealthBar';
import '../../Shared/CharacterImage/CharacterImage.scss';

const CharacterBox = props => (
    <Row>
        <Col md={4} style={{border: '1px solid black', paddingTop: '10px', paddingBottom: '10px'}}>
            <Row > 
                <Col md={8}>
                    <Row>
                        <Col md={9} style={{OverflowEvent:'hidden'}}>
                            <h4>{props.Character.Name}</h4>
                        </Col>
                        <Col md={1}>
                            {
                                props.InBattle
                                ? <p>{props.Character.InitiativeOrder}</p>
                                : <p>{props.Character.MarchingOrder}</p>
                            }
                            
                        </Col>
                    </Row>
                    {
                        props.Character.DisplayHP 
                        ? <Row>
                            <Col md={12}>
                                <HealthBar DisplayHP={props.Character.DisplayHP} HP={props.Character.HP} />
                            </Col>
                        </Row> 
                        : null
                    }
                </Col>
                <Col md={4}>
                    <CharacterImage Image='' />
                </Col>
            </Row>
        </Col>
    </Row>
)

export default CharacterBox;
