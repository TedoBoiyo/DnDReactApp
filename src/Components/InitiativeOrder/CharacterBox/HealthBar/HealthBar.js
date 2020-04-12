import React from 'react';
import './HealthBar.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HealthBar = props => (
    props.DisplayHP ? <ProgressBar variant='success' animated now={props.HP} /> : null
)

export default HealthBar;
