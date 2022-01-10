import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './StatItem.scss';

const StatItem = ({title, value}) => {
    return (
        <div className="stat">
            <p className="statName">{title}</p>
            <ProgressBar now={value} max={160} label={value} style={{ minWidth:'180px' }}/>
        </div>
    )
}

export default StatItem;