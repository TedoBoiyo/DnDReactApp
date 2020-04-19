import React from 'react';
import './HealthBar.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HealthBar = props => (
   <ProgressBar variant='success' animated now={props.HP} label={props.DisplayHPLabel ? props.HP : null} />
)

export default HealthBar;
