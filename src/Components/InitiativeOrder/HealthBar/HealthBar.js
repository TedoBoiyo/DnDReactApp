import React from 'react';
import './HealthBar.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HealthBar = props => (
    props.DisplayHealth ? <ProgressBar variant='success' animated now={45} /> : null
)

export default HealthBar;
