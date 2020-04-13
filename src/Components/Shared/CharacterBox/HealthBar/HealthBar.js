import React from 'react';
import './HealthBar.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HealthBar = props => (
   <ProgressBar variant='success' animated now={props.HP} />
)

export default HealthBar;
