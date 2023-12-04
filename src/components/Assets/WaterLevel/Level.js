import './Level.css';
import React, { useState, useEffect } from 'react';


const WaterLevel = () => {
    const filledPercentage = 30;
    const waterLiter = 20000;

    const containerStyle = {
        height:`${filledPercentage}%`,
        backgroundColor: '#3498db',
        alignSelf: 'flex-end',
        width: '100%',
    };

return (
    <div className='container'>
        <div style={containerStyle}>
            <div></div>
            <span>{waterLiter} Liter</span>
        </div>
    </div>
);

}
export default WaterLevel;